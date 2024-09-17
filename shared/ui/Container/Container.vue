<script setup lang="ts">

</script>

<template>
<div :class="styles.root">
    <slot />
</div>
</template>

<style module="styles" lang="scss">
.root {
    width: 100%;
    max-width: rem(1140);
    margin: 0 auto;
    padding: 0 rem(20);
    box-sizing: content-box;
}
</style>
