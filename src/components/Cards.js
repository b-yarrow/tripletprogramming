import React, { Component } from 'react';
import Card from './CardUI';
import poisonIvy from '../assets/poison-ivy.jpg';
// import venom from '../assets/venom.jpg';
// import ladyDeath from '../assets/lady-death.jpg';
// import hankHenshaw from '../assets/hank-henshaw.jpg';


export default function Cards(props){



   
        // console.log(this.props.name);
        return (

            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="card-box">
                    {/* <Card imgsrc={poisonIvy} title='Poison Ivy'/> */}
                        <Card imgsrc={props.image.url} title={props.name}/>
                    </div>








                    {/* <div className="col-md-4">
                        <Card imgsrc={hankHenshaw} title='Hank Henshaw'/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={ladyDeath} title='Lady Death'/> */}
                    {/* </div> */}
                </div>
            </div>
        );
    }

