import React, { useState } from 'react';

function CarInfo(object){
    const [color, setColor] = useState('red'); 

    return(
        <div>
            <header>This car is {color} {object.model}</header>
            <button onClick={() => setColor('blue')}>Change color</button>
        </div>
    )
}

export default CarInfo;