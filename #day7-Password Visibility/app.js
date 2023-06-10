    // Get the password field and toggle  checkbox
    const password = document.querySelector('#password');
    const toggle =  document.querySelector('#show-password');

    // Listen for the click event on the toggle
toggle.addEventListener('click', () =>{
    // If toggle is checked , change the type to 'text'.
    // Otherwise change it back to 'Password
    if (toggle.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    }

    }, false)


