<template>
    <button
        type="button"
        class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        :class="{
            'rounded-l-md': left,
            'rounded-r-md -ml-px': right,
            '-ml-px': middle
        }"
    >
        <div class="w-5 h-5 mr-2 -ml-1 text-gray-400" aria-hidden="true">
            <slot name="icon"></slot>
        </div>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "TextIconGroupButton",
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
