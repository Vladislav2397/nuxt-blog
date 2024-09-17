<script setup lang="ts">
import {SectionHeader} from "~/shared/ui/SectionHeader"
import { ArticleCard } from "~/entities/article/ui/ArticleCard"

const { data } = useFetch<{ articles: any[] }>('http://localhost:3010/api/v1/articles')

console.log('data', JSON.stringify(data.value))

</script>

<template>
<div>
    <SectionHeader title="Latest articles" description="Local" :class="styles.header" />
    <div :class="styles.list">
        <ArticleCard
            v-if="data"
            v-for="article in data.articles"
            :key="article.id"
            :article="article"
        />
    </div>
</div>
</template>

<style module="styles" lang="scss">
.header {
    margin-bottom: rem(24);
}

.list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: rem(24);
}
</style>
