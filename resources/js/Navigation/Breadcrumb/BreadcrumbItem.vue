<template>
    <li>
        <div class="flex items-center">
            <inertia-link
                v-if="href"
                :href="href"
                class="mr-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
                <slot></slot>
            </inertia-link>
            <span v-else class="mr-4 text-sm font-medium text-gray-500">
                <slot></slot>
            </span>
            <ChevronRightIcon v-if="chevron" class="flex-shrink-0 w-5 h-5 text-gray-400" />
        </div>
    </li>
</template>
<script>
import { ChevronRightIcon } from "@heroicons/vue/solid";

export default {
    components: { ChevronRightIcon },
    name: "BreadcrumbItem",
    props: {
        href: {
            type: String,
            required: false,
        },
        chevron: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
