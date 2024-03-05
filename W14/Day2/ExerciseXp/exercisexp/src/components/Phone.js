import React, { useState } from "react";

const Phone = ({ brand: initialBrand, model: initialModel, color: initialColor, year: initialYear }) => {
    const [brand, setBrand] = useState(initialBrand || "Samsung");
    const [model, setModel] = useState(initialModel || "Galaxy S20");
    const [color, setColor] = useState(initialColor || "black");
    const [year, setYear] = useState(initialYear || 2020);

    const changeColor = () => {
        setColor("blue");
    };

    return (
        <div>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Color: {color}</p>
            <p>Year: {year}</p>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
};

export default Phone;