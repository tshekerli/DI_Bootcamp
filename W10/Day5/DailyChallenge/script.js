// I did not have a time to style the converter but it works fine. 
// I used python to get the currency codes and names using Selenium to scrape the data from the website https://www.exchangerate-api.com/docs/supported-currencies and then I used json to convert it to a json file. Because I wanted to have all the currencies to work instead of just a few.
// I used the json file to populate the dropdowns with the currency info.
// I used fetch to get the conversion rate from the api and then I displayed the result on the page.
// Even though I did some uncessary steps I am very proud of my work.


let api = 'b734bf10b2a2ab5afd81b57f'
let array = []
let url = 'https://v6.exchangerate-api.com/v6/' + api + '/latest/'
// Fetch the JSON file
fetch('currency_info.json')
    .then(response => response.json())
    .then(data => {
        // Create two dropdown elements
        let dropdown1 = document.querySelector('#first');
        let dropdown2 = document.querySelector('#second');

       
        for (let key in data) {
            let option1 = document.createElement('option');
            option1.text = `${key} - ${data[key]}`;
            option1.value = `${key} - ${data[key]}`;
            dropdown1.add(option1);

            let option2 = document.createElement('option');
            option2.text = `${key} - ${data[key]}`;
            option2.value = `${key} - ${data[key]}`;
            dropdown2.add(option2);
        }
    })
    .catch(error => console.error('Error:', error));

    let button = document.querySelector('#submit');

    button.addEventListener('click', () => {
        let first = document.querySelector('#first').value.substring(0, 3).toUpperCase();
        let second = document.querySelector('#second').value.substring(0, 3).toUpperCase();
        let amount = parseFloat(document.querySelector('input').value);
        let result = document.querySelector('#result');
        let url2 = url + first;
        fetch(url2)
    .then(response => response.json())
    .then(data => {
        let rate = data.conversion_rates[second];
        if (rate === undefined) {
            result.innerHTML = `Conversion rate for ${second} not found`;
        } else {
            let conversion = amount * rate;
            result.innerHTML = `${amount} ${first} = ${conversion} ${second}`;
        }
    })
    .catch(error => console.error('Error:', error));
    });

