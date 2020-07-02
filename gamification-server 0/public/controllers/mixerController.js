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
                let points = 0
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

module.exports = {
    calcular
};

