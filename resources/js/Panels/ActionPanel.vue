<template>
    <div class="bg-white rounded-lg shadow">
        <form :action="action" :method="method">
            <div :class="{ 'px-4 py-5 sm:p-6': !fluid }">
                <slot></slot>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "ActionPanel",
    props: {
        action: {
            type: String,
            default: "#",
        },
        method: {
            type: String,
            default: "POST",
        },
        fluid: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
