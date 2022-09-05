<template>
    <button
        v-bind="$attrs"
        type="button"
        class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        :class="{
            'rounded-l-md': left,
            'rounded-r-md -ml-px': right,
            '-ml-px': middle
        }"
    >
        <span class="sr-only">{{ title }}</span>
        <div class="w-5 h-5">
            <slot></slot>
        </div>
    </button>
</template>
<script>
export default {
    name: "IconGroupButton",
    props: {
        title: {
            type: String,
            default: null
        },
        left: {
            type: Boolean,
            default: false
        },
        right: {
            type: Boolean,
            default: false
        },
        middle: {
            type: Boolean,
            default: true
        }
    }
};
</script>
