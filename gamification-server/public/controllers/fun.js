let Regla = require('../schemas/reglaSchema');
let Data = require('../schemas/dataSchema');

let safeEval = require('safe-eval')

let calcular = (req, res) => {
    let DataReturn = []
    Regla.find({}, (err, ReglasList) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        Data.find({}, (err, Data) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            let DataList = Data;
            DataList.forEach(data => {
                let reglasNivel = [];
                let newData = JSON.parse(JSON.stringify(data));
                let points = 0;
                ReglasList.forEach(regla => {
                    if (regla.nivel == data.nivel) {
                        reglasNivel.push(regla);
                    }
                });
                reglasNivel.forEach(regla => {
                    let paramsstring = '('
                    regla.paramList.forEach(reglaParam => {
                        let encontrado = 0;
                        data.params.forEach(dataParam => {
                            paramName = Object.keys(dataParam)
                            paramValue = Object.values(dataParam)
                            if (paramName == reglaParam) {
                                encontrado = 1;
                                paramsstring += paramValue += ','
                            }
                        });
                        if (encontrado == 0) {
                            reglasNivel = reglasNivel.filter(e => {
                                paramsstring = '(,'
                                return e != regla;
                            })
                        }
                    });
                    paramsstring = paramsstring.substring(0, paramsstring.length - 1);
                    paramsstring += ")"
                    if (paramsstring != "()") {
                        points += safeEval(regla.data + paramsstring)
                    }
                });
                newData.points = points;
                DataReturn.push(newData);
            });
            return res.status(200).json({
                ok: true,
                Users: DataReturn
            });
        });
    });
};


function func1(params) {
    let points = 0;
    let stars = 0;
    points = Math.trunc(params.data.x / 10);
    if (params.config.y < params.data.y) {
        stars = Math.trunc(params.data.y / params.config.y);
    };
    let score = { points: points, stars: stars };
    return score;
}

module.exports = {
    calcular
};

player = {
    nombre: "Paco",
    instanciaId: "empa@asd.com",
    data: {
        x: 5
    }
}

campagna = {
    _id: "q2w4e6qwg6d3c2v9cx97d5saflrka6",
    instanciaId: "empa@asd.com",
    reglaId: 'zx54cqw65w4e6qw54e2as1dq6w54efas',
    data: {
        y: 10
    }
}

instancia = {
    email: "empa@asd.com",
    campagnas: [
        "q2w4e6qwg6d3c2v9cx97d5saflrka6",//La seleccion de la campaña no sucede en el momento de la creacion de la instancia
    ]
}

regla = {
    nombre: "ejemploRegla",
    _id: 'zx54cqw65w4e6qw54e2as1dq6w54efas',
    data: "function ejemploRegla(data) {return data.x + data.y;}",
}
