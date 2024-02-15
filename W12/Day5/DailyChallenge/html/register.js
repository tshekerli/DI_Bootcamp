document.addEventListener('DOMContentLoaded', (event) => {
    const register = document.getElementById('register');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    if (register && username && password) {
        register.addEventListener('click', (event) => {
            if (username.value === '' || password.value === '' || password2.value === '') {
                event.preventDefault();
                register.disabled = true;
            }
        });

        
        username.addEventListener('input', enableButton);
        password.addEventListener('input', enableButton);
        password2.addEventListener('input', enableButton);

        function enableButton() {
            if (username.value !== '' && password.value !== '') {
                register.disabled = false;
            }
        }
    } else {
        console.error('register, username, or password not found');
    }

    if (password && password2) {
        password2.addEventListener('input', (event) => {
            if (password.value !== password2.value) {
                password2.setCustomValidity('Passwords must match');
            } else {
                password2.setCustomValidity('');
            }
        });
    } else {
        console.error('password or password2 not found');
    }
});