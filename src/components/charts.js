import React  from 'react';
import { Pie } from 'react-chartjs-2';


export default ({title, ...props}) => {
    return (
        <div>
            <h1>{title}</h1>
            <Pie {...props}/>
        </div>
    )
}
