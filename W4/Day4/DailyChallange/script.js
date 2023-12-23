// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.
// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptun", "Pluto"];
let planetSizepx = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let moons = [0, 0, 1, 2, 79, 82, 27, 14, 5];
let colors = ["#d3d3d3", "#f4f4f4", "#0000ff", "#ff0000", "#ff9900", "#ffcc00", "#00ffff", "#000099", "#663300"];
let universe = document.querySelector('section');
universe.style.display = 'flex'; 
for(let i = 0; i < planets.length; i++){
    let planet = document.createElement('div');
    planet.classList.add('planet');
    planet.style.backgroundColor = colors[i];
    planet.style.width = `${planetSizepx[i]}px`;
    planet.style.height = `${planetSizepx[i]}px`;
    planet.style.margin = '20px';
    planet.style.padding = '20px';
    planet.style.border = '2px solid black';
    planet.style.borderColor = colors[i];
    let planetName = document.createElement('div');
    planetName.classList.add('planet-name');
    planetName.innerText = planets[i];
    planet.appendChild(planetName);
    for(let j = 0; j < moons[i]; j++){
        let moon = document.createElement('div');
        moon.classList.add('moon');
        planet.appendChild(moon);
    }
    universe.appendChild(planet);
}