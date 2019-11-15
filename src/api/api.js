import React, { Component } from 'react'
import axios from 'axios'

// proxy url -> append this before your API call
const corsUrl = "https://cors-anywhere.herokuapp.com/";

const superheroUrl = id =>
    `${corsUrl}https://superheroapi.com/api/10156328823326924/${id}`;

export default class Api extends Component {
    state = {
        heroData: {},
        loading: true
    };
    componentDidMount() {
        axios.get(superheroUrl(370)).then(response => {
            this.setState({
                heroData: response.data,
                loading: false
            });
        });
    }

    render() {
        if (this.state.loading) return <div>Loading.....</div>;
        console.log(this.state.heroData)
        return (
            <>
                <p>Name: {this.state.heroData.name}</p>
                {/* <p>Name: {this.state.heroData.biography['full-name']}</p> */}
                <p>Height: {this.state.heroData.appearance.height[0]}</p>
                <p>Weight: {this.state.heroData.appearance.weight[0]}</p>
                <img src={this.state.heroData.image.url}></img>
            </>
        )
    }
}
