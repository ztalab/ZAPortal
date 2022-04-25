import router from './router'
import { EventBus } from '@/utils/event-bus'
import { fetchUser } from '@/api'

// const whiteList = ['login', 'home']

router.beforeEach(async(to, from, next) => {
  EventBus.$emit('app.loading', true)
  document.title = to?.meta?.title || 'ZAPortal'

  try {
    const user = await fetchUser()
    console.log(user)
  } catch (e) {
    if (to.name !== 'login') {
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
