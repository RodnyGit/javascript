//Dom Selectors
let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let password = document.getElementById('password');
let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
	axios
		.post('/usuario', {
			nombre: nombre.value,
			email: email.value,
			password: password.value
		})
		.then((response) => {
			console.log(response);
		});
	nombre.value = '';
	email.value = '';
	password.value = '';
});
