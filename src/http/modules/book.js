import axios from "../axios"

export const bookName = () => {
  return axios({ url: '/book',method: 'get'})
}