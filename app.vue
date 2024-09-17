<template>
<h1>Application</h1>
<pre>{{data}}</pre>
</template>

<script setup>
const { data, error } = await useFetch('/api/v1/articles')
</script>
