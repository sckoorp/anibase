<template>
    <div class="flex justify-start items-center">
        <p class="text-light text-xl font-bold rounded-sm uppercase">{{ value }}</p>
    </div>
</template>

<script lang="ts" setup>
const { value } = defineProps(["value"]);
</script>