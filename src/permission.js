import router from './router'
import { EventBus } from '@/utils/event-bus'

// const whiteList = ['login', 'home']

router.beforeEach(async(to, from, next) => {
  EventBus.$emit('app.loading', true)
  document.title = to?.meta?.title || 'ZAPortal'
  next()
})

router.afterEach(_ => {
  window.setTimeout(() => {
    EventBus.$emit('app.loading', false)
  }, 100)
})
