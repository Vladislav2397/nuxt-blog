<script setup lang="ts">
import {AppText} from "~/shared/ui/AppText"

defineOptions({
    name: 'ArticleBanner'
})
</script>

<template>
<div :class="styles.root">
    <img src="https://placehold.co/744x396" alt="article image" />
    <div :class="styles.content">
        <AppText size="20" weight="regular" tag="p" text="Label" />
        <AppText size="32" weight="bold" tag="h4" text="Title" />
        <AppText size="16" weight="regular" tag="p" text="By Author" />
    </div>
</div>
</template>

<style module="styles" lang="scss">
.root {
    position: relative;
    aspect-ratio: 744/396;
    border-radius: rem(12);
    overflow-x: hidden;
    overflow-y: hidden;
    
    img {
        width: 100%;
        height: 100%;
    }
}

.content {
    position: absolute;
    left: rem(24);
    bottom: rem(24);
}
</style>
