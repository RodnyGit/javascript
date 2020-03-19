//Dom Selectors
let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let password = document.getElementById('password');
let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
	usuario = {
		nombre: nombre.value,
		email: email.value,
		password: password.value
	};
	console.log(usuario);
	axios.get('/usuario').then((response) => {
		console.log(response);
	});
});
