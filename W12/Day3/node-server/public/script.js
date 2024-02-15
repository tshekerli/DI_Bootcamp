fetch("http://localhost:3001/api/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const html = data.map(item => {
        return `<div style="display:inline-block;border:1px solid #000;text-align:center; margin:20px;padding:20px;">
            <h2>${item.name}</h2> 
            <h3>${item.price}</h3>
        </div>`
    });
    document.getElementById('root').innerHTML = html.join('')
  })
  .catch((e) => {
    console.log(e);
  });


  // fetch("http://localhost:3001/api/users")
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data);
  //   const html = data.map(item => {
  //       return `<div>
  //           ${item.name} ${item.email}
  //       </div>`
  //   });
  //   document.getElementById('root').innerHTML += html.join('')
  // })
  // .catch((e) => {
  //   console.log(e);
  // });