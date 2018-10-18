import axios from 'axios';

if(localStorage.getItem("token")) {
    axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem("token")}`;
} else {
    delete axios.defaults.headers.common['Authorization'];
}

const path = "http://localhost:8000/api";

export default class UserHttp {
    static list() {
        return new Promise((resolve, reject) => {
            axios.get(`${path}/users/`)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }
}