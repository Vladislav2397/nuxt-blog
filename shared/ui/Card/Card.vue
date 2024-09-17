<script setup lang="ts">

</script>

<template>
<div :class="styles.root" @click="$emit('click', $event)">
    <slot />
</div>
</template>

<style module="styles" lang="scss">
.root {
    display: flex;
    padding: rem(12);
    box-sizing: border-box;
    box-shadow: 0 10px 20px 0 rgba(#000000, 0.1);
    background: #fff;
    border-radius: rem(12);
    overflow: hidden;
}
</style>
