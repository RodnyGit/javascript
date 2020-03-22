let distpatch = (req, res) => {
	console.log(req.body);
	res.state.dispatch(req.body);
	return res.status(200).json({
		ok: true,
		state: res.state.getState()
	});
};
let getState = (req, res) => {
	return res.status(200).json({
		ok: true,
		state: res.state.getState()
	});
};
let subscribe = (req, res) => {
	return res.status(200).json({
		ok: true,
		state: res.state
	});
};
module.exports = {
	distpatch,
	getState,
	subscribe
};
