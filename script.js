const regForm = document.getElementById('regForm');
const loginForm = document.getElementById('loginForm');
const registrationDiv = document.getElementById('registration');
const loginDiv = document.getElementById('login');
const showLogin = document.getElementById('showLogin');
const showRegister = document.getElementById('showRegister');

let users = [];

// Handle Registration
regForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const rollNumber = document.getElementById('rollNumber').value;
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Save user details
    users.push({ rollNumber, name, department, phone, email, username, password });
    alert('Registration successful! You can now log in.');

    // Switch to login form
    registrationDiv.style.display = 'none';
    loginDiv.style.display = 'block';
});

// Handle Login
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert(`Welcome, ${user.name}!`);
        // Redirect to welcome page
        window.location.href = 'welcome.html?name=' + encodeURIComponent(user.name);
    } else {
        alert('Invalid username or password!');
    }
});

// Show Login Form
showLogin.addEventListener('click', function(event) {
    event.preventDefault();
    registrationDiv.style.display = 'none';
    loginDiv.style.display = 'block';
});

// Show Registration Form
showRegister.addEventListener('click', function(event) {
    event.preventDefault();
    loginDiv.style.display = 'none';
    registrationDiv.style.display = 'block';
});
