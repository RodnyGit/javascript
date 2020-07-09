//Dom Selectors
let actions = document.getElementById('actions');
let messages = document.getElementById('messages');
let senderId = document.getElementById('senderId');
let textareaMsj = document.getElementById('textareaMsj');
let sendBtn = document.getElementById('sendBtn');

async function takeUSer() {
	axios.get('/getState').then((res) => {
		console.log(res);
		senderId.innerHTML = res.data.state.value[0].nombre;
	});
}
takeUSer();
//Clicking Function
sendBtn.addEventListener('click', () => {
	io().emit('chatMsj', {
		message: textareaMsj.value,
		senderId: senderId.innerHTML
	});
	textareaMsj.value = '';
	actions.innerHTML = '...';
});

//Tiping Funcion
textareaMsj.addEventListener('keypress', () => {
	io().emit('tiping', { senderId: senderId.innerHTML });
});

//Escuchando servidor
io().on('chatMsjFromServ', (data) => {
	messages.innerHTML += '<br>' + data.senderId + ':' + '<br>' + '--' + data.message;
});
io().on('tipingFromServ', (data) => {
	actions.innerHTML = data.senderId + '...';
});
