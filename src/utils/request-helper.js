/*
 * Copyright 2022-present The ZTDBP Authors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { EventBus } from '@/utils/event-bus'

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
      const statusCode = error.response.status

      if (statusCode === 401 && ['/login', '/'].includes(window.location.pathname)) { // ignore error message
        return Promise.reject(error)
      }

      EventBus.$emit('app.message', `[${statusCode}] ${error.message}`, 'error')
      return Promise.reject(error)
    }
  )
}
