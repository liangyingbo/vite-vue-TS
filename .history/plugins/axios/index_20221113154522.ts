import { time } from 'console'
import { TIMEOUT } from 'dns'
import Axios from './Axios'

const axios = new Axios({
    baseURL:"/api",
    timeout:1000,
    headers:{}
})