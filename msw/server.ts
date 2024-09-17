// ~/msw/server.ts
import { handlers } from './handlers'
import { baseURL } from './config'

export default defineNuxtMswServerOption(() => {
    // assume your server listening at http://localhost:8000

    // composables that not related to NuxtApp can be used here, like: useRuntimeConfig

    return {
        baseURL,
        handlers,
        serverOptions: {
            onUnhandledRequest: (request, print) => {
                if (!request.url.includes('/api/v1/')) return

                print.warning()
            },
        },
    }
})
