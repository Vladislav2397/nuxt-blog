<script setup lang="ts">
import {AppText} from "~/shared/ui/AppText"

defineProps<{
    title: string
    description?: string
}>()
</script>

<template>
<div :class="[styles.root, description && styles.hasDescription]">
    <AppText
        tag="h4"
        size="20"
        weight="bold"
        :text="title"
        :class="styles.title"
    />
    <AppText
        v-if="description"
        :class="styles.description"
        tag="h4"
        size="20"
        weight="bold"
        :text="description"
    />
</div>
</template>

<style module="styles" lang="scss">
.root {
    background-color: #02A28F;
    color: #fff;
    display: flex;
    border-radius: rem(12);
    justify-content: center;
    align-items: center;
    height: rem(48);
    padding-left: rem(24);
    padding-right: rem(24);
    box-sizing: border-box;
}

.hasDescription {
    justify-content: space-between;
}

.description {
    flex-shrink: 0;
    margin-left: auto;
}
</style>
