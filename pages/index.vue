<template>
    <div class="space-y-8">
        <div class="space-y-4 select-none m-4">
            <Section value="Anime List" />
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                <Card v-for="i in data?.anime" :data="i" />
            </div>
        </div>
        <div class="space-y-4 select-none m-4">
            <Section value="Manga List" />
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                <Card v-for="i in data?.manga" :data="i" />
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