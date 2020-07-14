import { Middleware } from '@nuxt/types'

const check: Middleware = (context) => {
    context.store.dispatch('authorize/initAuth', context.req)
}

export default check