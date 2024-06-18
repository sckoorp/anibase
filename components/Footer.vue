<template>
    <div class="flex flex-col justify-center items-center p-8 select-none">
        <p class="text-light text-base font-medium">&copy;{{ currentYear }}. AniBase</p>
        <p class="text-light/50 text-sm font-normal">Created & Maintained by 
            <a href="https://github.com/sckoorp" target="_blank" class="hover:underline">Sckoorp</a></p>
    </div>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>