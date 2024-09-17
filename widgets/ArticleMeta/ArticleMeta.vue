<script setup lang="ts">

import {AppText} from "~/shared/ui/AppText";
</script>

<template>
<div :class="styles.root">
    <AppText size="32" weight="semibold" tag="h2" text="Title" />
    <div :class="styles.info">
        <AppText size="16" weight="regular" tag="span" text="By Author" />
        <AppText size="16" weight="regular" tag="span" text="22 May 2022" />
    </div>
</div>
</template>

<style module="styles" lang="scss">
.root {
    display: flex;
    flex-direction: column;
}

.info {
    display: flex;
    flex-direction: row;
    gap: rem(32);
}
</style>
