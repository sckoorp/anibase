<template>
    <Title>AniBase</Title>
    <NuxtLoadingIndicator color="#92CACE" />
    <Header />
    <slot />
    <Footer />
</template>

<script lang="ts" setup>
</script>

<style>
* { @apply scroll-smooth font-outfit transition-all }
body { @apply bg-background }
</style>