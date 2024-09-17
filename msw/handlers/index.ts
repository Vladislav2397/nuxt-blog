import {http, HttpResponse} from "msw"

import { baseURL } from '../config'

export const handlers = [
    http.get(baseURL + '/api/v1/articles', async () => {
        await delay()

        return HttpResponse.json({
            list: [
                {
                    id: 1,
                    title: 'Article title 1',
                    description: 'Article description 1',
                    content: 'Article content 1',
                    image: 'https://placehold.co/640x480.png',
                    date: '2024-01-01T00:00:00.000Z',
                }
            ],
            total: 1
        })
    })
]

function delay(ms: number = 1000) {
    return new Promise<void>(resolve => {
        const timeout = setTimeout(() => {
            clearTimeout(timeout)
            resolve()
        }, ms)
    })
}
