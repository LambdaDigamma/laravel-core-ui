<template>
    <span
        v-bind="$attrs"
        class="inline-flex rounded-md shadow-sm"
        :class="{ 'w-full': block }"
    >
        <component
            class="inline-flex items-center justify-center w-full font-medium text-white transition duration-150 ease-in-out bg-gray-900 border border-transparent "
            :is="type"
            :href="href"
            :type="buttonType"
            :aria-disabled="disabled"
            :target="target"
            :class="{
                'px-2.5 py-1.5 text-xs leading-4 rounded': size === 'xs',
                'px-3 py-2 text-sm leading-4 rounded-md': size === 'sm',
                'px-4 py-2 text-sm leading-6 rounded-md': size === 'md',
                'px-4 py-2 text-base leading-6 rounded-md': size === 'lg',
                'px-6 py-3 text-base leading-6 rounded-md': size === 'xl',
                'hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:ring-gray active:bg-gray-700':
                    !disabled,
                'opacity-50 cursor-default': disabled,
            }"
        >
            <slot></slot>
        </component>
    </span>
</template>

<script>
export default {
    name: "BlackButton",
    inheritAttrs: false,
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
        target: {
            type: String,
            required: false,
            default: null,
        },
    },
    computed: {
        type() {
            if (this.target) {
                return "a";
            } else if (this.href) {
                return "inertia-link";
            } else {
                return "button";
            }
        },
    },
};
</script>

<style scoped></style>
