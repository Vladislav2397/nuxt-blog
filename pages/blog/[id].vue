<script setup lang="ts">
import { ArticleMeta } from "~/widgets/ArticleMeta"
import { ArticleContent } from "~/widgets/ArticleContent"

import { SectionHeader } from "~/shared/ui/SectionHeader"

const { params: { id } } = useRoute()

const { data } = await useFetch(`/api/v1/articles/${id}`)

console.log('data', data)
</script>

<template>
<div>
    <SectionHeader title="breadcrumbs" />
    <ArticleMeta />
    <ArticleContent />
</div>
</template>

<style scoped lang="scss">

</style>
