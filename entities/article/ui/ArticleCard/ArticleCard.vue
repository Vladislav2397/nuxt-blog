<script setup lang="ts">
import {AppText} from "~/shared/ui/AppText"
import dayjs from "dayjs"

const props = defineProps<{
    article: {
        id: number
        title: string
        description: string
        image: string
        date: string
    }
}>()

const date = computed(() => dayjs(props.article.date).format('D MMMM YYYY'))

defineOptions({
    name: 'ArticleCard'
})
</script>

<template>
<NuxtLink :class="[styles.root, cardStyles.root]" :to="`/blog/${article.id}`">
    <div :class="styles.cover">
        <img :src="article.image" alt="article image" />
    </div>
    <div :class="styles.content">
        <AppText
            :class="styles.label"
            tag="small"
            size="14"
            weight="regular"
            text="Label"
        />
        <AppText
            :class="styles.title"
            tag="h5"
            size="20"
            weight="bold"
            :text="article.title"
        />
<!--        <AppText-->
<!--            :class="styles.author"-->
<!--            tag="span"-->
<!--            size="16"-->
<!--            weight="regular"-->
<!--            text="By Author"-->
<!--        />-->
<!--        <AppText-->
<!--            :class="styles.description"-->
<!--            tag="p"-->
<!--            size="14"-->
<!--            weight="regular"-->
<!--            :text="article.description"-->
<!--        />-->
<!--        <AppText-->
<!--            :class="styles.date"-->
<!--            tag="span"-->
<!--            size="14"-->
<!--            weight="regular"-->
<!--            :text="date"-->
<!--        />-->
    </div>
</NuxtLink>
</template>

<style module="styles" lang="scss">
.root {
    display: flex;
    flex-direction: column;
    padding: 0;
}

.cover {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    aspect-ratio: 360/191;
    border-radius: rem(12);
    overflow: hidden;
    
    img {
        width: 100%;
        height: 100%;
    }
}

.content {
    display: flex;
    flex-direction: column;
    padding: rem(12);
}

.author {
    margin-bottom: rem(16);
}

.description {
    margin-bottom: rem(12);
}

.link {
    text-decoration: none;
}
</style>
<style lang="scss" module="cardStyles" src="../../../../shared/styles/card.module.scss" />
