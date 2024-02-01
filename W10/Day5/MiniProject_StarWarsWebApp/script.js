let button = document.querySelector('#btn');
let name = document.querySelector('.name');
let height = document.querySelector('.height');
let gender = document.querySelector('.gender');
let birthYear = document.querySelector('.birthYear');
let homeworld = document.querySelector('.homeWorld');


const loading = () =>{
    name.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>'
    gender.textContent = '';
    height.textContent = '';
    homeworld.textContent = '';
    birthYear.textContent = ''
}

const findName = () => {
    let randomNumber = Math.floor(Math.random() * 88) + 1;
    let url  = `https://www.swapi.tech/api/people/${randomNumber}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.message === 'ok') {
            let person = data.result.properties;
            let personName = person.name;
            let personGender = person.gender;
            let personHomeworld = person.homeworld;
            let personHeight = person.height;
            let personBirthYear = person.birth_year;

            
            let homeworldPromise = fetch(personHomeworld)
                .then(response => response.json())
                .then(data => {
                    if (data.message === 'ok') {
                        return data.result.properties.name;
                    }
                    throw new Error('Homeworld not found');
                });

            
            return Promise.all([personName, personGender, personHeight, personBirthYear, homeworldPromise]);
        } else {
            throw new Error('Person not found');
        }
    })
    .then(([personName, personGender, personHeight, personBirthYear, homeworldName]) => {
        
        name.textContent = personName;
        gender.textContent = `Gender: ${personGender}`;
        height.textContent = `Height: ${personHeight}`;
        birthYear.textContent = `Birth Year: ${personBirthYear}`;
        homeworld.textContent = `Home World: ${homeworldName}`;
    })
    .catch(error => {
        console.error('Error:', error);
        name.textContent = "Oh No! That person isn't available.";
        gender.textContent = '';
        height.textContent = '';
        homeworld.textContent = '';
        birthYear.textContent = '';
    });
}

const buttonEvent = () =>{
    loading()
    findName()
} 

button.addEventListener('click', buttonEvent)

