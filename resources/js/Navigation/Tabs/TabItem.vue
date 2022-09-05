<template>
    <inertia-link
        :href="href"
        class="inline-flex items-center px-1 py-4 text-sm font-medium border-b-2 group focus:ring-0"
        :class="{
            'border-blue-500 text-blue-600': active,
            'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': !active
        }"
        :aria-current="active ? 'page' : ''"
    >
        <div
            v-if="hasIcon"
            class="w-5 h-5 mr-2 -ml-0.5"
            :class="{
                'text-blue-500': active,
                'text-gray-400 group-hover:text-gray-500': !active
            }"
        >
            <slot name="icon"></slot>
        </div>
        <slot></slot>
    </inertia-link>
</template>
<script>
export default {
    name: "TabItem",
    props: {
        href: {
            type: String,
            required: false
        },
        active: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        hasIcon() {
            return !!this.$slots.icon;
        }
    }
};
</script>
