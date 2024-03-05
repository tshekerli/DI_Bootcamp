import React, {useState} from "react";

const clickMe = () => {
  alert('You clicked me!');
};

const handleKeyDown =(event) => {
    if (event.key === 'Enter') {
      alert('You have entered' + " " + event.target.value);
    }
}

const IsToggleOn = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'ON' : 'OFF'}
        </button>
    );
    }


const Events = () => {
  return (
    <div>
      <button onClick={clickMe}>Click me!</button>
        <input type="text" onKeyDown={handleKeyDown} />
        {IsToggleOn()}
    </div>
  );
}

export default Events;