<script setup lang="ts">
import { Container } from '~/shared/ui/Container'
import { AppText } from "~/shared/ui/AppText"
</script>

<template>
<div :class="styles.root">
    <Container :class="styles.container">
        <AppText
            :class="styles.logo"
            tag="span"
            size="36"
            weight="semibold"
            text="Def blog" />
        <nav>
            <NuxtLink :class="styles.link" to="/">Home</NuxtLink>
            <NuxtLink :class="styles.link" to="/blog">Blog</NuxtLink>
            <div :class="styles.search" />
        </nav>
    </Container>
</div>
</template>

<style module="styles" lang="scss">
.root {
    height: rem(70);
    background-color: #02A28F;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: white;
}

.link {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: rem(16);
    line-height: rem(20);
    text-decoration: none;
    color: white;
}

.link + .link {
    margin-left: rem(12);
}
</style>
