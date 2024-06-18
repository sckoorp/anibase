<template>
    <div class="flex justify-start items-center">
        <p class="text-dark bg-prime text-xl font-bold rounded-sm uppercase px-2">{{ value }}</p>
    </div>
</template>

<script lang="ts" setup>
const { value } = defineProps(["value"]);
</script>