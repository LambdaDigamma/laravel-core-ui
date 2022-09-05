<template>
    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div class="flex flex-1 justify-between sm:hidden">
            <InertiaLink
                v-if="resource.prev_page_url"
                :href="resource.prev_page_url"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
            >
                Vorherige
            </InertiaLink>
            <InertiaLink
                v-if="resource.next_page_url"
                :href="resource.next_page_url"
                class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
            >
                Nächste
            </InertiaLink>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between space-x-2 lg:space-x-4">
            <div>
                <p class="text-sm text-gray-700">
                    Zeigt
                    <span class="font-medium">{{ resource.from }}</span>
                    bis
                    <span class="font-medium">{{ resource.to }}</span>
                    von
                    <span class="font-medium">{{ resource.total }}</span>
                    Ergebnissen
                </p>
            </div>
            <div>
                <PaginationButtonGroup :resource="resource"></PaginationButtonGroup>
            </div>
        </div>
    </div>
</template>
<script>
import PaginationButtonGroup from "./PaginationButtonGroup.vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";
import { InertiaLink } from "@inertiajs/inertia-vue3";

export default {
    name: "PageButtonFooter",
    components: { PaginationButtonGroup, ChevronLeftIcon, ChevronRightIcon, InertiaLink },
    props: {
        resource: Object,
    },
};
</script>
