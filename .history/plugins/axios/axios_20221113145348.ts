import axios, { AxiosInstance } from "axios";

class Axios {
    private instance = {} as AxiosInstance

    private interceptors() { }

    private interceptorsRequest() {
        this.instance.interceptors.request.use(
            config => {
                // 在发送请求之前做些什么
                return config;
            }, error => {
                // 对请求错误做些什么
                return Promise.reject(error);
            });
    }

    private interceptorsResponse() {
        this.instance.interceptors.response.use(
            response => {
                // 2xx 范围内的状态码都会触发该函数。
                // 对响应数据做点什么
                return response;
            }, error => {
                // 超出 2xx 范围的状态码都会触发该函数。
                // 对响应错误做点什么
                return Promise.reject(error);
            });
    }

}