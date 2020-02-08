import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  withCredentials: false,
  timeout: 30000
})

service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const res = response.data
  const { status, msg } = res
  if (status === 1) {
    return res
  } else {
    // Message({
    //   message: msg,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(new Error(msg | 'Error'))
  }
}, error => {
  console.log('err:' + error)
  // Message({
  //   message: error.message,
  //   type: 'error',
  //   duration: 5 * 1000
  // })
  return Promise.reject(error)
})

export default service
