console.log(io());

//Dom Selectors
let actions = document.getElementById('actions');
let messages = document.getElementById('messages');
let senderId = document.getElementById('senderId');
let textareaMsj = document.getElementById('textareaMsj');
let sendBtn = document.getElementById('sendBtn');

//Clicking Function
sendBtn.addEventListener('click', () => {
	io().emit('chatMsj', { message: textareaMsj.value });
	textareaMsj.value = '';
	actions.innerHTML = '...';
});

//Tiping Funcion
textareaMsj.addEventListener('keypress', () => {
	io().emit('tiping', { senderId: senderId.innerHTML });
});

//Escuchando servidor
io().on('chatMsjFromServ', (data) => {
	messages.innerHTML += '<br>' + data.message;
});
io().on('tipingFromServ', (data) => {
	actions.innerHTML = data.senderId + '...';      
});
