import { Middleware } from '@nuxt/types'

const admin: Middleware = (context) => {
    if(!context.store.getters['authorize/isauthenticated']) return context.redirect('/login')
}

export default admin