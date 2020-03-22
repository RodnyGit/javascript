//Dom Selectors
let nombreLogin = document.getElementById('nombreLogin');
let emailLogin = document.getElementById('emailLogin');
let passwordLogin = document.getElementById('passwordLogin');
let submitBtnLogin = document.getElementById('submitBtnLogin');
let showState = document.getElementById('showState');

submitBtnLogin.addEventListener('click', () => {
	axios
		.post('/login', {
			nombre: nombreLogin.value,
			email: emailLogin.value,
			password: passwordLogin.value
		})
		.then((response) => {
			console.log(response);
			if (response.data.user) {
				axios
					.post('/distpatch', {
						type: 'logUser',
						payload: { value: response.data.user }
					})
					.then(() => {
						function change() {
							window.location.href = '../chat';
						}
						change();
					});
			}
		});
	nombreLogin.value = '';
	emailLogin.value = '';
	passwordLogin.value = '';
});
