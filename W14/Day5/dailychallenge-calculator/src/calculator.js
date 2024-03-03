import React, { useState } from 'react';

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const add = () => {
        setResult(parseInt(num1) + parseInt(num2));
    };

    return (
        <div className='container'>
            <h3>Adding Two Numbers</h3>
            <div>
                <input type='number' value={num1} onChange={e => setNum1(e.target.value)} placeholder='Enter first number' id='first'/>
                <input type='number' value={num2} onChange={e => setNum2(e.target.value)} placeholder='Enter second number' id='second'/>
            </div>
            <button onClick={add}>Add Them!</button>
            <p>{result}</p>
        </div>
    );
}

export default Calculator;