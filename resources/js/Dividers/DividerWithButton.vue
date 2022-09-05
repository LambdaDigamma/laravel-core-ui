<template>
    <div class="relative">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-center">
            <button
                type="button"
                class="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-200 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <div v-if="hasIcon" class="-ml-1.5 mr-1 h-5 w-5 text-gray-400">
                    <slot name="icon"></slot>
                </div>
                <span>{{ text }}</span>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        text: String,
    },
    computed: {
        hasIcon() {
            return !!this.$slots.icon;
        },
    },
};
</script>
