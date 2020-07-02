//Dom Selectors
let nombreLogin = document.getElementById('nombreLogin');
let emailLogin = document.getElementById('emailLogin');
let passwordLogin = document.getElementById('passwordLogin');
let submitBtnLogin = document.getElementById('submitBtnLogin');
let showState = document.getElementById('showState');

function login(data) {
	console.log('logueando ' + data);
}
submitBtnLogin.addEventListener('click', () => {
	axios
		.post('/entrada', {
			nombre: nombreLogin.value,
			email: emailLogin.value,
			password: passwordLogin.value
		})
		.then((response) => {
			if (response.data.user) {
				axios
					.post('/distpatch', {
						type: 'logUser',
						payload: { value: response.data.user }
					})
					.then(() => {
						debugger
						window.location.href = '../chat';
					});
			}
		});
	nombreLogin.value = '';
	emailLogin.value = '';
	passwordLogin.value = '';
});
