<template>
    <div class="space-y-8">
        <div class="space-y-4 select-none m-4">
            <Section value="Anime List" type="Anime" />
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2" v-if="data?.anime.length! > 0">
                <Card v-for="i in data?.anime" :data="i" type="Anime" />
            </div>
            <div class="flex flex-col justify-center items-center gap-2 h-[35vh]" v-else>
                <p class="text-prime text-4xl font-bold">Dang</p>
                <p class="text-light text-lg font-normal">It looks like anime list is empty.</p>
            </div>
        </div>
        <div class="space-y-4 select-none m-4">
            <Section value="Manga List" type="Manga" />
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2" v-if="data?.manga.length! > 0">
                <Card v-for="i in data?.manga" :data="i" type="Manga" />
            </div>
            <div class="flex flex-col justify-center items-center gap-2 h-[35vh]" v-else>
                <p class="text-prime text-4xl font-bold">Dang</p>
                <p class="text-light text-lg font-normal">It looks like manga list is empty.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const pocketbase = usePocketbase(runtimeConfig.public.NUXT_PUBLIC_POCKETBASE_URL);
const { data } = await useAsyncData("data", async () => {
    const [anime, manga] = await Promise.all([
        (await pocketbase.collection("anidb").getList(1, 8)).items,
        (await pocketbase.collection("mangadb").getList(1, 8)).items
    ]);
    return { anime, manga }
});
</script>