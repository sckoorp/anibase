<template>
    <div class="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-8 select-none m-4">
        <div class="hidden lg:flex flex-col gap-2">
            <img :src="data?.cover" :alt="data?.title" class="w-56 h-80 rounded-sm object-cover">
        </div>
        <div class="lg:hidden flex flex-col items-center gap-2">
            <img :src="data?.cover" :alt="data?.title" class="w-40 h-60 md:w-48 md:h-72 rounded-sm object-cover">
            <div class="flex flex-col justify-center items-center text-center">
                <p class="text-light text-base font-normal">{{ data?.year }}</p>
                <p class="text-light text-2xl font-bold line-clamp-3">{{ data?.title }}</p>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="hidden lg:flex flex-col">
                <p class="text-light text-base font-normal">{{ data?.year }}</p>
                <p class="text-light text-2xl font-bold line-clamp-2">{{ data?.title }}</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
                <button type="button" class="text-dark bg-prime outline-none rounded-sm px-2"
                    v-for="genre in data?.genres">{{ genre }}</button>
            </div>
            <div class="bg-dark/75 space-y-2 rounded-sm p-4">
                <p class="text-light text-lg font-semibold">Synopsis</p>
                <div v-html="data?.synopsis" class="text-light/85 text-base font-normal" />
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div class="space-y-2">
                    <div class="bg-dark/75 space-y-2 rounded-sm p-4">
                        <p class="text-light text-lg font-semibold">Format</p>
                        <p class="text-light/85 text-base font-normal">{{ data?.format }}</p>
                    </div>
                    <div class="bg-dark/75 space-y-2 rounded-sm p-4">
                        <p class="text-light text-lg font-semibold">Chapters</p>
                        <p class="text-light/85 text-base font-normal">{{ data?.chapters }} Chapter(s)</p>
                    </div>
                    <div class="bg-dark/75 space-y-2 rounded-sm p-4">
                        <p class="text-light text-lg font-semibold">Volumes</p>
                        <p class="text-light/85 text-base font-normal">{{ data?.volumes }} Volume(s)</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <div class="bg-dark/75 space-y-2 rounded-sm p-4">
                        <p class="text-light text-lg font-semibold">Status</p>
                        <p class="text-light/85 text-base font-normal">{{ data?.status }}</p>
                    </div>
                    <div class="bg-dark/75 space-y-2 rounded-sm p-4">
                        <p class="text-light text-lg font-semibold">Start Date</p>
                        <p class="text-light/85 text-base font-normal" v-if="data?.started">
                            {{ formatIsoDate(data?.started) }}</p>
                        <p class="text-light/85 text-base font-normal" v-else>N/A</p>
                    </div>
                    <div class="bg-dark/75 space-y-2 rounded-sm p-4">
                        <p class="text-light text-lg font-semibold">End Date</p>
                        <p class="text-light/85 text-base font-normal" v-if="data?.ended">
                            {{ formatIsoDate(data?.ended) }}</p>
                        <p class="text-light/85 text-base font-normal" v-else>N/A</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { formatIsoDate } from "~/lib/formatter";
const runtimeConfig = useRuntimeConfig();
const pocketbase = usePocketbase(runtimeConfig.public.NUXT_PUBLIC_POCKETBASE_URL);
const { data } = await useAsyncData(async () => await pocketbase.collection("mangadb").getOne(String(useRoute().params.id)));
</script>