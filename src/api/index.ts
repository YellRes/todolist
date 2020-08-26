import axios, {AxiosRequestConfig, AxiosError, AxiosResponse} from 'axios'
import {message} from 'antd'


axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://localhost:3001'

let startFlag = false

// 拦截器
export default function AxiosConfig () {
    axios.interceptors.request.use((config: any) => {
        if (config.data && config.data.showLoading) {
            startFlag = true

        }

        if (config.params) config.params._t = Date.now()

        return config
    }, (err: any) => {
        if (startFlag) {
            startFlag = false
        }
        return Promise.reject(err)
    })

    axios.interceptors.response.use((res: any) => {
        if (startFlag) {
            startFlag = false
        }

        return res.data
    }, (err: any) => {
        if (err.response && (err.response.status + '').startsWith('1')) {
            message.error('请求出错')
        }

        if (startFlag) startFlag = false
        
        return Promise.reject(err)
    })
}