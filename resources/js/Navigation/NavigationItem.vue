<template>
    <inertia-link
        :href="href"
        class="px-3 py-2 text-sm font-medium transition duration-150 rounded-md focus:outline-none focus:text-white"
        :class="
            active
                ? 'text-white bg-red-700'
                : 'text-red-300 hover:text-white bg-red-600 hover:bg-red-700 focus:bg-red-700'
        "
    >
        <span>{{ title }}</span>
    </inertia-link>
</template>

<script>
export default {
    name: "NavigationItem",
    props: {
        title: {
            type: String,
        },
        href: {
            type: String,
        },
        active: {
            type: Boolean,
            default: false,
        },
        hasIcon: {
            type: Boolean,
            default: true,
        },
    },
};
</script>

<style scoped></style>
