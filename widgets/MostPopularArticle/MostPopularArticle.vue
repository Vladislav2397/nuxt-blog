<script setup lang="ts">
import { ArticleSideCard } from '~/entities/article/ui/ArticleSideCard'
import { SectionHeader } from "~/shared/ui/SectionHeader"
import type {Article} from "~/entities/article/types"

defineOptions({
    name: 'MostPopularArticle'
})

const { data } = await useFetch<{ list: Article[] }>('/api/v1/articles?filter=popular&limit=3', {
    key: 'popular-articles',
})
</script>

<template>
<div :class="styles.root">
    <SectionHeader :class="styles.title" title="Most popular" />
    <div :class="styles.list" v-if="data">
        <ArticleSideCard v-for="article in data.list" :article="article" />
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
