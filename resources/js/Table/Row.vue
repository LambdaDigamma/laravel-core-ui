<template>
    <tr
        v-bind="$attrs"
        class="bg-white dark:bg-dark-800"
        :class="{ 'cursor-pointer': href, 'hover:bg-gray-50': !disableHover }"
        @click="navigate"
    >
        <!-- @click.self.prevent="navigate" -->
        <slot></slot>
    </tr>
</template>
<script>
export default {
    name: "Row",
    props: {
        href: {
            type: String,
            required: false,
            default: () => null
        },
        disableHover: {
            type: Boolean,
            required: false,
            default: () => false
        }
    },
    methods: {
        navigate() {
            if (this.href) {
                this.$inertia.visit(this.href);
            }
        }
    }
};
</script>
