<script setup lang="ts">
import Card from './Card.vue'
</script>

<template>
<Story title="Card">
    <Card :class="styles.first">
        <p>Some content</p>
    </Card>
</Story>
</template>

<style module="styles" lang="scss">
.first {
    //
}
</style>

<docs lang="md">
# My documentation

Checkout this [cool video](https://www.youtube.com/watch?v=dQw4w9WgXcQ)!
</docs>
