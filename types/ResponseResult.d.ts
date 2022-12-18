interface ResponseResult<T> {
[x: string]: any;
    code: number,
    type: 'success' | 'error',
    message: string,
    data: T
}