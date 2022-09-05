<template>
    <button
        v-bind="$attrs"
        type="button"
        class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        :class="{
            'rounded-l-md': left,
            'rounded-r-md -ml-px': right,
            '-ml-px': middle
        }"
    >
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "SimpleGroupButton",
    props: {
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
