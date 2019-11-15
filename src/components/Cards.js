import React, { Component } from 'react';
import Card from './CardUI';
import poisonIvy from '../assets/poison-ivy.jpg';
// import venom from '../assets/venom.jpg';
import ladyDeath from '../assets/lady-death.jpg';
import hankHenshaw from '../assets/hank-henshaw.jpg';




export default class Cards extends Component {
    render() {
        return (

            <div className="container-fluid d-flex justify-content-center">
                {/* <h1 className="slogan">It's good to be bad</h1> */}

                <div className="row">

                    <div className="col-md-4">
                        <Card imgsrc={poisonIvy} title='Poison Ivy'/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={hankHenshaw} title='Hank Henshaw'/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={ladyDeath} title='Lady Death'/>
                    </div>
                </div>
            </div>
        );
    }
}
