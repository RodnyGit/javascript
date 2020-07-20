//Dom Selectors
let nombreLogin = document.getElementById('nombreLogin');
let passwordLogin = document.getElementById('passwordLogin');
let pwstIdLogin = document.getElementById('pwstIdLogin');
let submitBtnLogin = document.getElementById('submitBtnLogin');
let showState = document.getElementById('showState');

function login(data) {
	console.log('logueando ' + data);
}
submitBtnLogin.addEventListener('click', () => {
	axios
		.post('/login', {
			nombre: nombreLogin.value,
			password: passwordLogin.value,
			pwstId: pwstIdLogin.value
		})
		.then((response) => {
			console.log(response.data);
			if (response.data.user) {
				axios
					.post('/distpatch', {
						type: 'logUser',
						payload: { value: response.data.user }
					})
					.then(() => {
						axios.get('/getState').then((res) => {
							if (res.data.state.value) {
								console.log(res.data.state.value);
							}
						});
					});
			}
		});
	nombreLogin.value = '';
	passwordLogin.value = '';
	pwstIdLogin.value = '';
});
