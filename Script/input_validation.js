document.getElementById('loginForm').addEventListener('submit', function (event) {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!email.endsWith('@shoghlana.com')) {
        alert('Email must end with "@shoghlana.com".');
        event.preventDefault();
        return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters and include a lowercase letter, an uppercase letter, a number, and a special character.');
        event.preventDefault();
        return;
    }

    localStorage.setItem("email", email);

    const radios = document.getElementsByName('user-type');

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            localStorage.setItem('userType', radios[i].value);
            break;
        }
    }

});


document.getElementById('signupForm').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        e.preventDefault();
        return;
    }

    const email = document.getElementById('signupEmail').value.trim();
    if (!email.endsWith('@shoghlana.com')) {
        alert('Email must end with "@shoghlana.com".');
        e.preventDefault();
        return;
    }

    const password = document.getElementById('signupPassword').value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters and include a lowercase letter, an uppercase letter, a number, and a special character.");
        e.preventDefault();
        return;
    }

    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert("Confirm password must match the password.");
        e.preventDefault();
        return;
    }


    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    const radios = document.getElementsByName('user-type');

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            localStorage.setItem('userType', radios[i].value);
            break;
        }
    }
});

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
