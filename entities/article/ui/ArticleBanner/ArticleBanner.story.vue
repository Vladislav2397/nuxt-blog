<script setup lang="ts">
import ArticleBanner from "./ArticleBanner.vue"
</script>

<template>
<Story title="Article/ArticleBanner">
    <ArticleBanner :class="styles.root" />
</Story>
</template>

<style module="styles" lang="scss">
.root {
    //aspect-ratio: 744/396;
}
</style>
