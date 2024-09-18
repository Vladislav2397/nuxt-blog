import {http, HttpResponse} from "msw"

import { baseURL, delay } from '../config'

export const articlesHandlers = [
    http.get(baseURL + '/api/v1/articles', async ({ request }) => {
        await delay()

        const url = new URL(request.url)

        const limit = +(url.searchParams.get('limit') ?? '20')
        const offset = +(url.searchParams.get('offset') ?? '0')
        const filter = url.searchParams.get('filter')

        let list = articles

        if (filter && filter === 'popular') {
            list = articles.filter(item => item.isPopular)
        }

        return HttpResponse.json({
            list: list.slice(offset, limit),
            total: list.length
        })
    }),
    http.get(baseURL + '/api/v1/articles/:id', async ({ params }) => {
        await delay()

        const { id } = params

        return HttpResponse.json({
            article: articles.find(item => item.id === +id)
        })
    }),
]

const articles = [
    ...Array.from({ length: 20 }).map((_, i) => ({
        id: i + 1,
        title: `Article title ${i + 1}`,
        description: `Article description ${i + 1}`,
        content: `Article content ${i + 1}`,
        image: `https://placehold.co/640x480.png?text=${i + 1}`,
        date: new Date(Date.now() - (i * 24 * 60 * 60 * 1000)).toISOString(),
        isPopular: i % 2 === 0,
    })),
]
