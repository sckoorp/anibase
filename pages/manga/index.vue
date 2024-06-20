<template>
    <div class="space-y-4 select-none m-4">
        <Section value="Manga List" type="Manga" />
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2" v-if="data?.items.length! > 0">
            <Card v-for="i in data?.items" :data="i" type="Manga" />
        </div>
        <div class="flex flex-col justify-center items-center gap-2 h-[55vh]" v-else>
            <p class="text-prime text-4xl font-bold">Dang</p>
            <p class="text-light text-lg font-normal">It looks like manga list is empty.</p>
            <NuxtLink to="/" class="text-dark bg-prime text-lg font-medium 
            rounded-sm py-1 px-2 hover:bg-prime/75">Go Home</NuxtLink>
        </div>
        <Pagination :page="data?.page" :total="data?.totalPages" :refresh="refresh()" />
    </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const pocketbase = usePocketbase(runtimeConfig.public.NUXT_PUBLIC_POCKETBASE_URL);
const { data, refresh } = await useAsyncData(async () => await pocketbase.collection("mangadb")
    .getList(Number(useRoute().query.page), 32));
</script>