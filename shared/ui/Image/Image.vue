<script setup lang="ts">
defineProps<{
    src: string
    alt: string
}>()
</script>

<template>
<div :class="styles.root">
    <img
        :class="styles.image"
        :src="src"
        :alt="alt"
    />
</div>
</template>

<style module="styles" lang="scss">
.root {
    //
}

.image {
    //
}
</style>
