<script setup lang="ts">
import { ArticleSideCard } from '~/entities/article/ui/ArticleSideCard'
import { SectionHeader } from "~/shared/ui/SectionHeader"

defineOptions({
    name: 'MostPopularArticle'
})

const articles = computed(() => [])
</script>

<template>
<div :class="styles.root">
    <SectionHeader title="Most popular" />
    <ArticleSideCard v-for="article in articles" :article="article" />
</div>
</template>

<style module="styles" lang="scss">
.root {
    display: flex;
    flex-direction: column;
}
</style>
