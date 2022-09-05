<template>
    <span
        class="inline-flex rounded-md shadow-sm"
        :class="{ 'w-full justify-center': block }"
    >
        <component
            class="inline-flex items-center font-medium text-white transition duration-150 ease-in-out bg-red-500 border border-transparent"
            v-bind="$attrs"
            ref="button"
            :is="type"
            :href="href"
            :type="buttonType"
            :class="{
                'px-2.5 py-1.5 text-xs leading-4 rounded': size === 'xs',
                'px-3 py-2 text-sm leading-4 rounded-md': size === 'sm',
                'px-4 py-2 text-sm leading-6 rounded-md': size === 'md',
                'px-4 py-2 text-base leading-6 rounded-md': size === 'lg',
                'px-6 py-3 text-base leading-6 rounded-md': size === 'xl',
                'hover:bg-red-400 focus:outline-none focus:border-red-500 focus:ring-red active:bg-red-600': !disabled,
                'opacity-50 cursor-not-allowed': disabled,
                'w-full justify-center': block,
            }"
            @click="clickedButton($event)"
        >
            <div v-if="loading" class="mr-2 btn-spinner" />
            <slot></slot>
        </component>
    </span>
</template>

<script>
export default {
    name: "RedButton",
    props: {
        size: {
            validator: function (value) {
                return ["xs", "sm", "md", "lg", "xl"].indexOf(value) !== -1;
            },
            default: "md",
        },
        href: {
            type: String,
            required: false,
            default: null,
        },
        buttonType: {
            validator: function (value) {
                return ["button", "reset", "submit"].indexOf(value) !== -1;
            },
            default: null,
            required: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        block: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        type() {
            if (this.href) {
                return "inertia-link";
            } else {
                return "button";
            }
        },
    },
    methods: {
        clickedButton: function (e) {
            if (!this.disabled) {
                this.$emit("click", e);
            }
        },
    },
};
</script>

<style scoped></style>
