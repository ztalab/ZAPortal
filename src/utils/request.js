import axios from 'axios'
import qs from 'qs'
import { requestInterceptors } from './request-helper'

// create an axios instance
const service = axios.create({
  baseURL: 'http://192.168.2.80:8111/api/v1',
  withCredentials: false, // send cookies when cross-domain requests
  transformRequest: [function(data, headers) {
    return qs.stringify(data)
  }],
  paramsSerializer: function(params) {
    return qs.stringify(params, { indices: false })
  },
  timeout: 50000 // request timeout
})

requestInterceptors(service)

export default service
