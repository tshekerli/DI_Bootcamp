import React, { useState } from 'react';
import Garage from './Garage';

function CarInfo(object){
    
    const [color, setColor] = useState('red'); 

    return(
        <div>
            <header>This car is {color} {object.model}</header>
            <button onClick={() => setColor('blue')}>Change color</button>
            <Garage size="small" />
        </div>
    )
}

export default CarInfo;