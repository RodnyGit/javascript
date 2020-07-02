const axios = require('axios');


let login = (req, res) => {
    if (Object.keys(req.body).length > 0) {
        var user = req.body;
        axios
            .post('http://localhost:3999/login', {
                nombre: user.nombre,
                email: user.email,
                password: user.password
            })
            .then((response) => {
                console.log('antes');
                req.session.user_id = response.data.user[0]._id;
                return res.status(200).json({
                    ok: true,
                    user: response.data.user[0]
                });

            }).catch((err) => {
                console.log(err);
            })
    }
}
module.exports = {
    login
};