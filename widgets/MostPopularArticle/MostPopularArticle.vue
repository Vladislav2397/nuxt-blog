<script setup lang="ts">
import { ArticleSideCard } from '~/entities/article/ui/ArticleSideCard'
import { SectionHeader } from "~/shared/ui/SectionHeader"

const articles = computed(() => [
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
])

defineOptions({
    name: 'MostPopularArticle'
})

</script>

<template>
<div :class="styles.root">
    <SectionHeader :class="styles.title" title="Most popular" />
    <div :class="styles.list">
        <ArticleSideCard v-for="article in articles" :article="article" />
    </div>
</div>
</template>

<style module="styles" lang="scss">
.root {
    display: flex;
    flex-direction: column;
}

.title {
    margin-bottom: rem(20);
}

.list {
    display: flex;
    flex-direction: column;
    gap: rem(20);
}
</style>
