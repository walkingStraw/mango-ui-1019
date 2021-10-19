import axios from "../axios"

/* hello模块 */
export const helloTo = (data) => {
  return axios({ url: '/helloTo',method: 'post', data})
}
export const hello = () => {
  return axios({ url: '/hello',method: 'get'})
}