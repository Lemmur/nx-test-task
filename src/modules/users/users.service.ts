import axios from 'axios';

export const getUsersList = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}
