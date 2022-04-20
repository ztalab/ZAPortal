import Vue from 'vue'

/**
 * @param service AxiosInstance
 * @param flag String
 */
export function requestInterceptors(service, flag = '') {
  service.interceptors.request.use(
    config => {
      // if (store.getters.token) {
      //   config.headers['Authorization'] = 'Bear ' + store.getters.token
      // }
      return config
    },
    error => {
      // do something with request error
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )

  service.interceptors.response.use(
    response => {
      const res = response.data

      if (res.code === 1001) {
        return res
      }

      return Promise.reject(response)
    },
    error => {
      Vue.$message.warning(error.message)
      return Promise.reject(error)
    }
  )
}
