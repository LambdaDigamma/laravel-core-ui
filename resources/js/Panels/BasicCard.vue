<template>
    <div class="bg-white shadow" :class="{ 'rounded-lg': rounded }">
        <slot v-if="hasHeadingSlot" name="heading"></slot>
        <div v-if="!fluid" class="px-4 py-5 sm:p-6">
            <slot></slot>
        </div>
        <slot v-else></slot>
        <slot v-if="hasFooterSlot" name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: "BasicCard",
    props: {
        fluid: {
            type: Boolean,
            default: () => false,
        },
        rounded: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        hasHeadingSlot() {
            return !!this.$slots.heading;
        },
        hasFooterSlot() {
            return !!this.$slots.footer;
        },
    },
};
</script>
