var Player = require('../schemas/playerSchema');
let Regla = require('../schemas/reglaSchema');
let Instancia = require('../schemas/instanciaSchema');
let Campagna = require('../schemas/campagnaSchema');

let listar = (req, res) => {
	Player.find({}, (err, PlayerList) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		return res.status(200).json({
			ok: true,
			PlayerList
		});
	});
};
let agregar = (req, res) => {
	// create a new player
	let newPlayer = new Player({
		nombre: req.body.nombre,
		pwstId: req.body.pwstId,
		instanciaId: req.body.instanciaId
	});
	Player.find({ pwstId: newPlayer.pwstId }, (err, player) => {
		if (player.length > 0) {
			return res.status(200).json({
				ok: false,
				player: player
			});
		} else {
			newPlayer.save((err, player) => {
				if (err) {
					return res.status(400).json({
						ok: false,
						err
					});
				}
				return res.status(200).json({
					ok: true,
					newPlayer: player
				});
			});
		}
	});
};
let obtenerById = (req, res) => {
	Player.findById(req.params.id, (err, player) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		return res.status(200).json({
			ok: true,
			player
		});
	});
};
let actualizar = (req, res) => {
	Player.findById(req.params.id, (err, player) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		player.nombre = req.body.nombre;
		player.pwstId = req.body.pwstId;
		player.instanciaId = req.body.instanciaId;
		player.data = req.body.data;
		player.save((err, updatedPlayer) => {
			if (err) {
				return res.status(400).json({
					ok: false,
					err
				});
			}
			return res.status(200).json({
				ok: true,
				Player: updatedPlayer
			});
		});
	});
};
let eliminar = (req, res) => {
	Player.findById(req.params.id, (err, player) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		player.remove((err, removedPlayer) => {
			if (err) {
				return res.status(400).json({
					ok: false,
					err
				});
			}
			return res.status(200).json({
				ok: true,
				Player: removedPlayer
			});
		});
	});
};
let notificarEvento = (req, res) => {
	var eventPlayer = new Player({
		nombre: req.body.nombre,
		pwstId: req.body.pwstId,
		instanciaId: req.body.instanciaId,
		data: req.body.data
	});
	//Buscando si esta registrado el jugador en la BD
	Player.find({ pwstId: eventPlayer.pwstId }, (err, players) => {
		if (players.length > 0) {
			if ((eventPlayer.nombre == players[0].nombre) && (eventPlayer.instanciaId == players[0].instanciaId)) {
				//verificando si hay data en el jugador				
				if (eventPlayer.data) {
					//parseando hacia un objeto nuevo el jugador encontrado en la BD y agregando la data
					var newData = JSON.parse(JSON.stringify(players[0]));
					newData.data = eventPlayer.data;
					//verificando si tiene puntuacion
					if (!newData.score) {
						newData.score = {};
					}
					if (!newData.score.points) {
						newData.score.points = 0;
					}
					if (!newData.score.stars) {
						newData.score.stars = 0;
					}
					//buscando la instancia a la que pertenece el jugador para acceder a las campañas
					Instancia.find({ instanciaId: eventPlayer.instanciaId }, (err, instancia) => {
						if (err) {
							return res.status(400).json({
								ok: false,
								err
							});
						}
						campagnasIdArray = instancia[0].campagnas
						var campagnas = [];
						//buscando todas las reglas para luego filtrarlas por campaña
						Regla.find({}, (err, reglasAll) => {
							if (err) {
								return res.status(400).json({
									ok: false,
									err
								});
							}
							//buscando todas las campañas para luego filtrarlas por los id de las campañas de las intancias
							Campagna.find({}, (err, campagnasAll) => {
								if (err) {
									return res.status(400).json({
										ok: false,
										err
									});
								}
								//filtrando campañas por id y guardandolas para luego

								for (let index = 0; index < campagnasIdArray.length; index++) {
									let campagnaId = campagnasIdArray[index];
									const found = campagnasAll.find(campagna => {
										return String(campagna._id) == String(campagnaId);
									});
									campagnas.push(found);
								}

								//identificando que regla pertenece a cada campaña para luego utilizarla en la acumulacion
								campagnas.forEach(campagna => {
									var regla = reglasAll.find(regla => {
										return String(regla._id) == String(campagna.reglaId);
									})

									var params = { data: newData.data, config: campagna.config }
									var func = eval('(' + regla.data + ')')
									var score = func(params)
									console.log(score);
									for (const key in score) {
										if (score.hasOwnProperty(key)) {
											newData.score[key] += score[key];
										}
									}
								});
								//actualizacion del score del jugador
								Player.findById(newData._id, (err, player) => {
									if (err) {
										return res.status(400).json({
											ok: false,
											err
										});
									}
									player.nombre = newData.nombre;
									player.pwstId = newData.pwstId;
									player.instanciaId = newData.instanciaId;
									player.score = newData.score;
									player.save((err, updatedPlayer) => {
										if (err) {
											return res.status(400).json({
												ok: false,
												err
											});
										}
										return res.status(200).json({
											ok: true,
											updatedPlayer: updatedPlayer
										});
									});
								});
								// return res.status(200).json({
								// 	ok: true,
								// 	msj: "prueba"
								// });
							});
						});
					})

				} else {
					return res.status(200).json({
						ok: true,
						msj: 'no hay data'
					});
				}
			}
			else {
				return res.status(200).json({
					ok: false,
					Existe: players[0]
				});
			}
		} else {
			return res.status(200).json({
				ok: false,
				msj: 'Player no registrado...'
			});
		}
	});

};
module.exports = {
	notificarEvento,
	listar,
	agregar,
	eliminar,
	obtenerById,
	actualizar
};

