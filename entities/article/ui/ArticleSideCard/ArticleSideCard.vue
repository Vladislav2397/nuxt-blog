<script setup lang="ts">
import { AppText } from "~/shared/ui/AppText"
import { Card } from '~/shared/ui/Card'
import { Image } from '~/shared/ui/Image'
</script>

<template>
<Card :class="styles.root">
    <Image src="" alt="article image" />
    <div>
        <AppText
            size="20"
            weight="bold"
            tag="h5"
            text="title"
        />
        <AppText
            size="16"
            weight="regular"
            tag="span"
            text="date"
        />
    </div>
</Card>
</template>

<style module="styles" lang="scss">
.root {
    //
}
</style>
