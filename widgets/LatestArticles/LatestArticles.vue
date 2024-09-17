<script setup lang="ts">
import { SectionHeader } from "~/shared/ui/SectionHeader"
import { ArticleCard } from "~/entities/article/ui/ArticleCard"
import type { Article } from "~/entities/article/types"

const { data } = useFetch<{ list: Article[], total: number }>('/api/v1/articles')
</script>

<template>
<div>
    <SectionHeader title="Latest articles" description="Local" :class="styles.header" />
    <div :class="styles.list">
        <ArticleCard
            v-if="data"
            v-for="article in data.list"
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
