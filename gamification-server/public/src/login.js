//Dom Selectors
let nombreLogin = document.getElementById('nombreLogin');
let pwstIdLogin = document.getElementById('pwstIdLogin');
let passwordLogin = document.getElementById('passwordLogin');
let submitBtnLogin = document.getElementById('submitBtnLogin');


submitBtnLogin.addEventListener('click', () => {
	axios
		.post('/login', {
			nombre: nombreLogin.value,
			pwstId: pwstIdLogin.value,
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
						window.location.href = '../adminPage';
					});
			}
		});
	nombreLogin.value = '';
	pwstIdLogin.value = '';
	passwordLogin.value = '';
});
