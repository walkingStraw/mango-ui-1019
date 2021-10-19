import { baseUrl } from "@/utils/global"

export default {

  method: 'get',
  baseUrl: baseUrl,
  Headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  //参数
  data: {},
  timeout: 10000,
  withCredentials: true,
  responseType: 'json'
}