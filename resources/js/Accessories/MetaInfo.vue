<template>
    <div class="flex items-center text-sm text-gray-500 dark:text-dark-500">
        <div class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-dark-500" v-if="hasIcon">
            <slot name="icon"></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "MetaInfo",
    computed: {
        hasIcon() {
            return !!this.$slots.icon;
        },
    },
};
</script>
