let api = 'b734bf10b2a2ab5afd81b57f'
let array = []

fetch('currency_info.json')
    .then(response => response.json())
    .then(data => {
        for (let key in data) {
            array[key] = data[key]
            // console.log(`Key: ${key}, Value: ${data[key]}`);
        }
    })
    .catch(error => console.error('Error:', error));

