<script setup lang="ts">
import { MainArticleBanner } from "~/widgets/MainArticleBanner"
import { LatestArticles } from "~/widgets/LatestArticles"

await useFetch('http://localhost:3010/api/v1/articles', {
    key: 'articles'
})

defineOptions({
    name: 'BlogPage'
})
</script>

<template>
<div>
    <MainArticleBanner :class="styles.banner" />
    <LatestArticles />
</div>
</template>

<style module="styles" lang="scss">
.banner {
    margin-bottom: rem(32);
}
</style>
