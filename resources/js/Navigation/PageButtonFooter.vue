<template>
    <div class="w-full">
        <div class="flex flex-1 justify-between sm:hidden">
            <Link
                v-if="previous.url"
                :href="previous.url"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
            >

                Vorherige
            </Link>
            <Link
                v-if="next.url"
                :href="next.url"
                class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
            >
                Nächste
            </Link>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between space-x-2 lg:space-x-4">
            <div>
                <p v-if="!paginationLabel" class="text-sm text-gray-700 dark:text-dark-300">
                    Zeigt
                    <span class="font-medium">{{ from }}</span>
                    bis
                    <span class="font-medium">{{ to }}</span>
                    von
                    <span class="font-medium">{{ total }}</span>
                    Ergebnissen
                </p>
                <p v-else class="text-sm text-gray-700 dark:text-dark-300">
                    {{ paginationLabel({ from: from, to: to, total: total }) }}
                </p>
            </div>
            <div>
                <PaginationButtonGroup :resource="resource"></PaginationButtonGroup>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import PaginationButtonGroup from "./PaginationButtonGroup.vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";
import { Link } from "@inertiajs/vue3";
import {usePaginator} from "momentum-paginator";

const props = defineProps<{
    resource: any,
    paginationLabel?: Function,
}>()

const { from, to, total, previous, next, pages } = usePaginator(props.resource);

</script>
