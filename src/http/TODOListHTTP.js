import axios from 'axios';

if(localStorage.getItem("token")) {
    axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem("token")}`;
} else {
    delete axios.defaults.headers.common['Authorization'];
}

const path = "http://localhost:8000/api";

export default class TODOListHttp {

    static list() {
        return new Promise((resolve, reject) => {
            axios.get(`${path}/todo-list/`)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

    static create(todo_list = {}) {
        return new Promise((resolve, reject) => {
            axios.post(`${path}/todo-list/`, todo_list)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

    static update(id, data) {
        return new Promise((resolve, reject) => {
            axios.put(`${path}/todo-list/${id}/`, data)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${path}/todo-list/${id}/`)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

    static show(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${path}/todo-list/${id}/`)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

}