<script setup lang="ts">

import { Container } from "~/shared/ui/Container"
import { MostPopularArticle } from "~/widgets/MostPopularArticle"
</script>

<template>
<Container class="root">
    <div class="main">
        <slot />
    </div>
    <aside class="aside">
        <MostPopularArticle />
    </aside>
</Container>
</template>

<style scoped lang="scss">
.root {
    padding-top: rem(50);
    padding-bottom: rem(60);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: rem(24);
}

.main {
    flex-grow: 1;
}

.aside {
    min-width: rem(360);
}
</style>
