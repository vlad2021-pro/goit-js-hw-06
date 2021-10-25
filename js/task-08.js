const form = document.querySelector(".login-form");

form.addEventListener('submit', (event) => {
    event.preventDefault();

const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
    return alert('Все поля должны быть заполнены')    
    }

    const userData = { email: email.value, password: password.value };
    console.log(userData);
    event.currentTarget.reset();
})
