import React, { Component } from 'react'
import axios from 'axios'

// proxy url -> append this before your API call
const corsUrl = "https://cors-anywhere.herokuapp.com/";

const superheroUrl = id =>
    `${corsUrl}https://superheroapi.com/api/10156328823326924/${id}`;

export default class Api extends Component {
    state = {
        heroData: [],
        loading: true
    };
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
        if (this.state.loading) { return <div>Loading.....</div>; }
        console.log(this.state.heroData)
        return (
            <>
                <p>Name: {this.state.heroData[0].name}</p>
                {/* <p>Name: {this.state.heroData.biography['full-name']}</p> */}
                <p>Height: {this.state.heroData[0].appearance.height[0]}</p>
                <p>Weight: {this.state.heroData[0].appearance.weight[0]}</p>
                <img src={this.state.heroData[0].image.url}></img>
            </>
        )
    }
}
