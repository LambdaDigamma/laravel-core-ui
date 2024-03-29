<template>
    <nav
        class="isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
    >
        <component
            :is="previous.isActive ? 'link' : 'span'"
            :href="previous.url"
            class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 dark:bg-dark-800 dark:border-dark-600 dark:text-dark-400"
            :class="{
                'text-gray-400 hover:text-gray-500': previous.isActive,
                'cursor-not-allowed text-gray-300': !previous.isActive,
            }"
            preserve-scroll
        >
            <span class="sr-only">Vorherige</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
        </component>

        <component
            :is="page.isActive ? 'link' : 'span'"
            v-for="page in pages"
            class="relative inline-flex items-center border px-4 py-2 text-sm font-medium text-gray-700"
            :href="page.url"
            :class="{
                'z-10 border-blue-500 bg-blue-50 text-blue-600 dark:bg-emerald-700 dark:border-emerald-700 dark:text-dark-200':
                    page.isCurrent,
                'border-gray-300 text-gray-500 hover:bg-gray-50': page.isActive,
                'border-gray-300 text-gray-500 bg-white border-gray-300 hover:bg-gray-50 dark:bg-dark-800 dark:border-dark-600 dark:text-dark-400':
                    !page.isCurrent && page.isActive,
            }"
            preserve-scroll
        >
            {{ page.label }}
        </component>

        <component
            :is="next.isActive ? 'link' : 'span'"
            :href="next.url"
            class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 dark:bg-dark-800 dark:border-dark-600 dark:text-dark-400"
            :class="{
                'text-gray-400 hover:text-gray-500': next.isActive,
                'cursor-not-allowed text-gray-300': !next.isActive,
            }"
            preserve-scroll
        >
            <span class="sr-only">Nächste</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
        </component>
    </nav>
</template>
<script>
import { usePaginator } from "momentum-paginator";
import {computed, defineComponent, reactive, ref, watch} from "vue";
import { Link } from "@inertiajs/vue3";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";

export default defineComponent({
    name: "PaginationButtonGroup",
    components: {
        Link,
        ChevronLeftIcon,
        ChevronRightIcon,
    },
    props: {
        resource: {
            type: Object,
            required: true,
        },
    },
    setup(props) {

        const resource = reactive(props.resource);
        let paginator = usePaginator(resource);
        const from = ref(paginator.from);
        const to = ref(paginator.to);
        const total = ref(paginator.total);
        const previous = ref(paginator.previous);
        const next = ref(paginator.next);
        const pages = ref(paginator.pages);

        watch(() => props.resource, (newResource) => {
            paginator = usePaginator(newResource);
            from.value = paginator.from;
            to.value = paginator.to;
            total.value = paginator.total;
            previous.value = paginator.previous;
            next.value = paginator.next;
            pages.value = paginator.pages;
        });

        return {
            from,
            to,
            total,
            previous,
            next,
            pages,
        };
    },
});
</script>
