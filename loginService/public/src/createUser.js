//Dom Selectors
let nombre = document.getElementById('nombre');
let password = document.getElementById('password');
let pwstId = document.getElementById('pwstId');
let tipo = document.getElementById('tipo');
let grupo = document.getElementById('grupo');
let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
	console.log({
		nombre: nombre.value,
		password: password.value,
		pwstId: pwstId.value,
		tipo: tipo.value,
		grupo: grupo.value
	});
	axios
		.post('/usuario', {
			nombre: nombre.value,
			password: password.value,
			pwstId: pwstId.value,
			tipo: tipo.value,
			grupo: grupo.value
		})
		.then((response) => {
			console.log(response.data);
		});
	nombre.value = '';
	password.value = '';
	pwstId.value = '';
	tipo.value = '';
	grupo.value = '';
});
