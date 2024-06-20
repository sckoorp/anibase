<template>
    <div class="flex justify-between items-center">
        <button type="button" :disabled="page === 1 || page === 0" @click="handlePreviousPage" class="text-dark 
        bg-prime text-lg font-medium w-24 outline-none rounded-sm py-1 px-2 hover:bg-prime/75 
        disabled:text-light disabled:bg-light/25 disabled:cursor-not-allowed">Previous</button>
        <p class="text-light text-base font-normal">Page {{ page }}</p>
        <button type="button" :disabled="page === total || total === 0" @click="handleNextPage" class="text-dark 
        bg-prime text-lg font-medium w-24 outline-none rounded-sm py-1 px-2 hover:bg-prime/75 
        disabled:text-light disabled:bg-light/25 disabled:cursor-not-allowed">Next</button>
    </div>
</template>

<script lang="ts" setup>
const { page, total } = defineProps(["page", "total"]);
const handleNextPage = () => {
    navigateTo({
        query: {
            page: Number(useRoute().query.page) + 1
        }
    });
}
const handlePreviousPage = () => {
    navigateTo({
        query: {
            page: Number(useRoute().query.page) - 1
        }
    });
}
</script>