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

export function setCache(k, v) {
  const content = JSON.stringify({
    type: typeof v,
    value: v
  })
  window.localStorage.setItem(k, content)
}

export function getCache(k, defaultValue) {
  const content = window.localStorage.getItem(k)
  try {
    const obj = JSON.parse(content)
    return obj.value
  } catch (e) {
    return defaultValue === undefined ? content : defaultValue
  }
}
