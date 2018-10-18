import axios from 'axios';

if(localStorage.getItem("token")) {
    axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem("token")}`;
} else {
    delete axios.defaults.headers.common['Authorization'];
}

const path = "http://localhost:8000/api";

export default class MemberHttp {

    static create(data = {}) {
        return new Promise((resolve, reject) => {
            axios.post(`${path}/members/`, data)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

    static list(user_id, task_id) {
        return new Promise((resolve, reject) => {
            axios.get(`${path}/members/?user_id=${user_id}&task_id=${task_id}`)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${path}/members/${id}/`)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

}