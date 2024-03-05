import CarInfo from "./components/Car";
const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (
    CarInfo(carinfo)
  );
}

export default App;