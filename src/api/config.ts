import axios from 'axios'

export default {
    login: (params: any = {}) => {
        return axios.post('/users/login', {
            userName: params.userName,
            password: params.password,
        })
    }
}