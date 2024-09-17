<script setup lang="ts">
import { Header } from '~/widgets/Header'
</script>

<template>
    <NuxtLoadingIndicator />
    <Header />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>


