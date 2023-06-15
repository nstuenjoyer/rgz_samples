import axios from "axios"

const $host = axios.create({
    baseURL: 'http://217.71.129.139:4560/'
})
// baseURL: 'http://217.71.129.139:4560/'
// baseURL: 'http://localhost:5000/'
const $authHost = axios.create({
    baseURL: 'http://217.71.129.139:4560/'
})

const authInterceptor = config => {
    if (localStorage.getItem('token') !== null) {
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}