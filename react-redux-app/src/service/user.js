import axios from 'axios';

export function getUser(){
    return axios.get('http://localhost:3001/usuario')
    // .then(function (response) {        
    //     return response.data.usuariosList;
    // });
}
