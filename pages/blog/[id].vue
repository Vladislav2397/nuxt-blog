<script setup lang="ts">
import { ArticleMeta } from "~/widgets/ArticleMeta"
import { ArticleContent } from "~/widgets/ArticleContent"

import { SectionHeader } from "~/shared/ui/SectionHeader"
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
