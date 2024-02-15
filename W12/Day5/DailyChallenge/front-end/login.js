document.addEventListener('DOMContentLoaded', (event) => {
    const loginButton = document.getElementById('login');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if (loginButton && username && password) {
        loginButton.addEventListener('click', (event) => {
            if (username.value === '' || password.value === '') {
                event.preventDefault();
                loginButton.disabled = true;
            }
        });

        
        username.addEventListener('input', enableButton);
        password.addEventListener('input', enableButton);

        function enableButton() {
            if (username.value !== '' && password.value !== '') {
                loginButton.disabled = false;
            }
        }
    } else {
        console.error('loginButton, username, or password not found');
    }
});