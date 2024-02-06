link = 'https://users-18kl.onrender.com/userjson'

function addUser() {
    
   const name = e.target.elements.name.value
    const email = e.target.elements.email.value
    const username = e.target.elements.username.value 
    fetch(link, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
    .then(data => {
        console.log(data)
    })
}

document.getElementById('submit').addEventListener('click', addUser)