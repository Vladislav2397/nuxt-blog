<script setup lang="ts">
import dayjs from "dayjs"

import type {Article} from "~/entities/article/types"

import { AppText } from "~/shared/ui/AppText"

const props = defineProps<{
    article: Article
}>()

const date = dayjs(props.article.date).format('D MMMM YYYY')
</script>

<template>
<NuxtLink :to="`/blog/${article.id}`" :class="[styles.root, cardStyles.root]">
    <div :class="styles.image">
        <img :src="article.image" alt="article image" />
    </div>
    <div>
        <AppText
            :class="styles.title"
            size="16"
            weight="bold"
            tag="h5"
            :text="article.title"
        />
        <AppText
            size="14"
            weight="regular"
            tag="span"
            :text="date"
        />
    </div>
</NuxtLink>
</template>

<style module="styles" lang="scss">
.root {
    display: flex;
    flex-direction: row;
    gap: rem(12);
    padding: rem(12);
}

.image {
    width: rem(134);
    aspect-ratio: 134/72;
    overflow-x: hidden;
    overflow-y: hidden;
    border-radius: rem(12);
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.title {
    margin-bottom: rem(8);
}
</style>
<style lang="scss" module="cardStyles" src="~/shared/styles/decoration/card.module.scss" />
