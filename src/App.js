import React, { Component } from 'react'
import axios from 'axios'

// proxy url -> append this before your API call
const corsUrl = "https://cors-anywhere.herokuapp.com/";

const superheroUrl = id =>
  `${corsUrl}https://superheroapi.com/api/10156328823326924/${id}`;


export default class App extends Component {
  state = {
    heroData: [],
    loading: false
  }

  componentDidMount() {
    let idMax = 731;
    let rand;
    let found;
    for (let i = 0; i < 15; i++) {
      rand = Math.floor((Math.random() * (idMax - i)) + 1);
      console.log(rand);
      found = this.state.heroData.some(hero => hero.id === rand);
      console.log(found)
      if (!found) {
        axios.get(superheroUrl(rand)).then(response => {
          this.setState(prevState => ({
            heroData: [...prevState.heroData, response.data]
          }), () => {
            if (i === 14) {
              this.setState({
                loading: false
              });
            }
          })
        });
      } else {
        i--;
      }
    }
  }


  render() {
    console.log(this.state.heroData)
    return (
      <div className="App">
        <header className="App-header">
          <h1>SUPERHERO PAGE</h1>
          {/* <Api /> */}
        </header>
      </div>
    );
  }
}
