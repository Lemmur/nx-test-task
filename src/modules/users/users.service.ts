import axios from 'axios';

export function getUsersList() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}
