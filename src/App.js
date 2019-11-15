
import React, { Component } from 'react'
import axios from 'axios'
// import PieChart from './components/charts.js'
// import PieData from "./data/pie.js"

// proxy url -> append this before your API call
const corsUrl = "https://cors-anywhere.herokuapp.com/";

const superheroUrl = id =>
  `${corsUrl}https://superheroapi.com/api/10156328823326924/${id}`;


export default class App extends Component {
  state = {
    heroData: [],
    loading: false,
    chartData: {
      labels: [
        "height",
        "weight",
        "age"
      ],
      datasets: [
        {
          data: [],
          backgroundColor: [
            'red',
            'blue',
            'yellow'
          ],
          hoverBackgroundColor: [
            'black',
            'purple',
            'green'
          ]
        }
      ]
    }
  }

  fillChart = () => {
    this.setState({
      chartData: { ...this.state.chartData, data: this.state.heroData[0].powerstats.combat }
    }, console.log(this.state.chartData))
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
    console.log(this.fillchart)
    return (
      <div className="App">
        <header className="App-header">
          <h1>SUPERHERO PAGE</h1>
          {/* <Api /> */}
        </header>
        {/* <PieChart title="Superhero Chart" data={PieData} height={20} width={20} /> */}
      </div>
    )
  }
}
