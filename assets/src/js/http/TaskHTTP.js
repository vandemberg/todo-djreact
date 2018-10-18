import axios from 'axios';

if(localStorage.getItem("token")) {
    axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem("token")}`;
} else {
    delete axios.defaults.headers.common['Authorization'];
}

const path = "/api";

export default class TaskHttp {

    static create(task = {}) {
        return new Promise((resolve, reject) => {
            axios.post(`${path}/tasks/`, task)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

    static update(id, data) {
        return new Promise((resolve, reject) => {
            axios.put(`${path}/tasks/${id}/`, data)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${path}/tasks/${id}/`)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

    static show(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${path}/tasks/${id}/`)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

}