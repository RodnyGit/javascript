//Dom Selectors
let nombreLogin = document.getElementById('nombreLogin');
let emailLogin = document.getElementById('emailLogin');
let passwordLogin = document.getElementById('passwordLogin');
let submitBtnLogin = document.getElementById('submitBtnLogin');

submitBtnLogin.addEventListener('click', () => {
	axios
		.post('/login', {
			nombre: nombreLogin.value,
			email: emailLogin.value,
			password: passwordLogin.value
		})
		.then((response) => {
			console.log(response);
		});
	nombreLogin.value = '';
	emailLogin.value = '';
	passwordLogin.value = '';
});
