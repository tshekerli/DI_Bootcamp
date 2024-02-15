window.onload = function() {
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const usernameField = document.getElementById('username');
        const passwordField = document.getElementById('password');
        const password2Field = document.getElementById('password2');

        console.log('Fields:', usernameField, passwordField, password2Field);

        const username = usernameField.value;
        const password = passwordField.value;
        const password2 = password2Field.value;

        console.log('Values:', username, password, password2);

        if (password !== password2) {
            alert('Passwords do not match');
            return;
        }
        const body = JSON.stringify({ username, password });
        console.log('Sending:', body);
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })
        .then(response => {
            console.log(response);
            return response.text();
        })
        .then(data => console.log(data))
        .catch((error) => {
          console.error('Error:', error);
        });
    });
};