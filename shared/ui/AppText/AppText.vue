<script setup lang="ts">
const styles = useCssModule('styles')

const props = defineProps<{
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small'
    size: '14' | '16' | '20' | '32' | '36'
    weight: 'regular' | 'medium' | 'bold' | 'semibold'
    text: string
}>()

const rootStyles = computed(() => [
    styles.root,
    styles[`size__${props.size}`],
    styles[`weight__${props.weight}`],
])
</script>

<template>
<component :is="tag" :class="rootStyles">
    {{ text }}
</component>
</template>

<style module="styles" lang="scss">
.root {
    font-family: 'Montserrat', sans-serif;
}

.size {
    &__14 { font-size: rem(14); }
    &__16 { font-size: rem(16); }
    &__20 { font-size: rem(20); }
    &__32 { font-size: rem(32); }
    &__36 { font-size: rem(36); }
}

.weight {
    &__regular { font-weight: 400; }
    &__medium { font-weight: 500; }
    &__bold { font-weight: 600; }
    &__semibold { font-weight: 700; }
}
</style>
