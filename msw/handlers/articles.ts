import {http, HttpResponse} from "msw";

import { baseURL, delay } from '../config'

export const articlesHandlers = [
    http.get(baseURL + '/api/v1/articles', async ({ request }) => {
        await delay()

        const url = new URL(request.url)

        const limit = +(url.searchParams.get('limit') ?? '20')
        const offset = +(url.searchParams.get('offset') ?? '0')

        return HttpResponse.json({
            list: articles.slice(offset, limit),
            total: articles.length
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
    {
        id: 1,
        title: 'Article title 1',
        description: 'Article description 1',
        content: 'Article content 1',
        image: 'https://placehold.co/640x480.png',
        date: '2024-01-01T00:00:00.000Z',
    },
    {
        id: 2,
        title: 'Article title 2',
        description: 'Article description 2',
        content: 'Article content 2',
        image: 'https://placehold.co/640x480.png',
        date: '2024-01-02T00:00:00.000Z',
    },
    {
        id: 3,
        title: 'Article title 3',
        description: 'Article description 3',
        content: 'Article content 3',
        image: 'https://placehold.co/640x480.png',
        date: '2024-01-02T00:00:00.000Z',
    }
]
