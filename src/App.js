import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Cards';
// import Card from './CardUI';
import poisonIvy from './assets/poison-ivy.jpg';


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

    const heros = this.state.heroData && this.state.heroData.map((hero, index)=>
    
      <Card image={hero.image} name={hero.name}/>
    )

    return (
      <div className="App">
        <header className="App-header">
          <h1 className='header'>Superheros and Supervillains</h1>
          {heros}
        </header>
      </div>
    );
  }
}
