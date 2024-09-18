import type { Meta } from '@storybook/vue3'

import Card from './Card.vue'

const meta: Meta<typeof Card> = {
    component: Card,
}

export default meta;

export const Default = {
    render() {
        return {
            components: { Card },
            template: '<Card>Content</Card>'
        }
    }
}
