import { handlers } from './handlers'

export default defineNuxtMswWorkerOption(() => {
    // You can access any browser api
    // window.location.href

    return {
        handlers,
        workerOptions: {
            // ...you can pass options to worker.start()
            onUnhandledRequest: (request, print) => {
                if (!request.url.includes('/api/v1/')) return

                print.warning()
            },
        },
        onWorkerStarted(worker, nuxtApp) {
            // Module will setup worker when nuxt run client plugin
            // Means this function will be called after plugin call worker.start()

            nuxtApp.hook('app:mounted', () => {
                // const route = useRoute()
                // console.log(worker.listHandlers())
            })
        },
    }
})
