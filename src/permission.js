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

import router from './router'
import { EventBus } from '@/utils/event-bus'
import store from '@/store'

const whiteList = ['login', 'home'] // skip login

router.beforeEach(async(to, from, next) => {
  EventBus.$emit('app.loading', true)
  document.title = to?.meta?.title || 'ZAPortal'

  // goto login if needed
  try {
    await store.dispatch('getUserInfo')
  } catch (e) {
    if (!whiteList.includes(to.name)) {
      EventBus.$emit('app.message', 'Need login', 'warning')
      hideLoading()
      next({ name: 'login' })
    }
  }

  next()
})

router.afterEach(_ => {
  hideLoading()
})

function hideLoading() {
  window.setTimeout(() => {
    EventBus.$emit('app.loading', false)
  }, 100)
}
