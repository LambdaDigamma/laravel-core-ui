<template>
    <inertia-link
        :href="href"
        class="flex flex-col items-center space-y-0.5 text-red-500 py-2"
    >
        <div
            class="w-5 h-5"
            :class="{
                'text-red-500 dark:text-red-600': active,
                'text-gray-400 dark:text-gray-600': !active,
            }"
        >
            <slot name="icon"></slot>
        </div>
        <span
            style="font-size: 0.65rem"
            class="tracking-wide"
            :class="{
                'text-red-500 dark:text-red-500': active,
                'text-gray-400 dark:text-gray-600': !active,
            }"
        >
            <slot name="label"> </slot>
        </span>
    </inertia-link>
</template>
<script>
export default {
    name: "AppTabBarItem",
    props: {
        active: {
            type: Boolean,
            default: false,
        },
        href: {
            type: String,
        },
    },
};
</script>
