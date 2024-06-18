<template>
    <NuxtLayout>
        <div class="flex flex-col justify-center items-center gap-2 h-[75vh]">
            <button type="button" class="text-light bg-light/15 text-lg font-medium 
            rounded-sm py-1 px-2">{{ error.statusCode }}</button>
            <p class="text-prime text-4xl font-bold">Dang</p>
            <p class="text-light text-lg font-normal">It looks like something broke.</p>
            <NuxtLink to="/" class="text-dark bg-prime text-lg font-medium 
            rounded-sm py-1 px-2 hover:bg-prime/75">Go Home</NuxtLink>
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
const error = useError();
</script>