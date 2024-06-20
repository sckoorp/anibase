<template>
    <div class="flex justify-between items-center">
        <p class="text-light text-xl font-bold rounded-sm uppercase">{{ value }}</p>
        <button type="button" @click="handleViewMore" class="text-light text-base font-normal hover:text-prime"
        v-if="!Boolean(useRoute().path === '/anime')">
            View More</button>
    </div>
</template>

<script lang="ts" setup>
const { value, type } = defineProps(["value", "type"]);
const handleViewMore = () => {
    if (type === "Anime") {
        navigateTo({
            path: "/anime",
            query: {
                page: 1
            }
        });
    } else {
        navigateTo({
            path: "/manga",
            query: {
                page: 1
            }
        });
    }
}
</script>