const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];
for ( let i = 0; i < robots.length; i++ ) {

    let div = document.createElement('div');
    div.setAttribute('class', `${robots[i].id}`);
    div.style.width = '300px';
    div.style.height = '350px';
    image = document.createElement('img');
    image.setAttribute('src', robots[i].image);
   
    image.style.borderRadius = '50%';
    image.style.backgroundColor = '#303952';
    image.style.height = '200px';
    image.style.width = '200px';
    image.style.margin = 'auto';
    div.appendChild(image);
    h2 = document.createElement('h2');
    h2.textContent = robots[i].name;
    h2.style.position = 'relative';
    h2.style.left = '20px';
    email = document.createElement('p');
    email.textContent = robots[0].email;
    email.style.position = 'relative';
    email.style.left = '20px';
    email.style.top = '-20px';
    div.appendChild(h2);
    div.appendChild(email);
    div.style.backgroundColor = '#4FC1C5';
    div.style.backgroundImage = 'url(/images/card-background-img.png'
    div.style.borderRadius = '10px';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.rowGap = '1px';
    document.querySelector('.cards').appendChild(div);
}

let inputField = document.querySelector('.search'); 
let inputValue = '';


inputField.addEventListener('.search', function(event) {
  inputValue = event.target.value;
});


console.log(inputValue);