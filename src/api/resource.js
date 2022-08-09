/*
 * Copyright 2022-present The Ztalab Authors.
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

import request from '@/utils/request'

// 获取资源列表
export function fetchZeroAccessResources(params = {}) {
  return request({
    url: '/access/resource',
    method: 'get',
    params
  })
}

// 添加资源
export function postZeroAccessResource(data = {}) {
  return request({
    url: '/access/resource',
    method: 'post',
    data
  })
}

// 修改资源
export function putZeroAccessResource(data = {}) {
  return request({
    url: '/access/resource',
    method: 'put',
    data
  })
}

// 删除资源
export function deleteZeroAccessResource(id) {
  return request({
    url: `/access/resource/${id}`,
    method: 'delete'
  })
}
