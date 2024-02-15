document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;

    if (!username || !password || !password2) {
        alert('All fields must be filled out');
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        username: username,
        password: password
    }));

    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Registration successful');
            window.location.href = '/login.html'; // Redirect to login.html
        } else {
            alert('Registration failed');
        }
    };
});