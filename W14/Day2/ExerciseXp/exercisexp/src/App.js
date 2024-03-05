import React, { useState } from "react";


import CarInfo from "./components/Car";
import Events from "./components/Events";
import Phone from "./components/Phone";
import Color from "./components/Color";
const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (
    //exercise1
    // CarInfo(carinfo)
    // exercise2
    // <Events />
    // exercise3
    //First version with default settings
    // <Phone/>
    //Second version with custom settings
    // <Phone brand="Apple" model="iPhone 12" color="white" year={2021} />

    //exercise4
    <Color />
    



  );
}

export default App;