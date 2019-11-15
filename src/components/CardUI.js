
import React from 'react';
import'../components/card-style.css';
import Button from 'react-bootstrap/Button';

const Card = props => {
    return (
        <div className="card text-center">
            
            <div className="overflow">
                <img src={props.imgsrc} alt="poison-ivy" className='card-img-top'/>
            </div>
        <div className="card-body text-dark"></div>
    <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ipsum ad veritatis quo accusamus et, corrupti nihil dignissimos, perferendis deleniti ratione magnam voluptatem officiis error doloribus sapiente recusandae labore doloremque.</p>
        <Button variant="btn btn-outline-success">Flip Me</Button>
        </div>
    );
}

export default Card;

