import { time } from 'console'
import { TIMEOUT } from 'dns'
import Axios from './Axios'

const http = new Axios({
    baseURL:"/api",
    timeout:1000,
    headers:{}
})

export default http;

