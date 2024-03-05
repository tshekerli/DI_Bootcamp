import React, { useState } from 'react';

const Forms = () => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [textAreaValue, setTextAreaValue] = useState("Some content...");
    const [selectedCar, setSelectedCar] = useState("Volvo");

    const mySubmitHandler = (event) => {
        event.preventDefault();
        alert(`Username: ${username}, Age: ${age}`);
    }

    const handleAgeChange = (event) => {
        const value = event.target.value;
        if (!Number(value)) {
            setErrorMessage("Age must be a number");
        } else {
            setErrorMessage("");
            setAge(value);
        }
    }

    let header = null;
    if (username) {
        header = <h1>Hello {username}, Age: {age}</h1>;
    }

    return (
        <div >
            {header}
            <form onSubmit={mySubmitHandler} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
                <label>Please enter your name:</label>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Please enter your age:</label>
                <input type="text" name="age" value={age} onChange={handleAgeChange} />
                <p>{errorMessage}</p>
                <textarea value={textAreaValue} onChange={(e) => setTextAreaValue(e.target.value)} />
                <select value={selectedCar} onChange={(e) => setSelectedCar(e.target.value)}>
                    <option value="Volvo">Volvo</option>
                    <option value="Saab">Saab</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Audi">Audi</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Forms;