<template>
    <div
        class="px-1 py-2 bg-white shadow cursor-move handle"
        :class="{
            'rounded-l': side === 'leading',
            'rounded-r': side === 'trailing',
        }"
    >
        <svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16">
            <path
                fill-opacity=".2"
                d="M4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            />
        </svg>
    </div>
</template>
<script>
export default {
    name: "DragHandle",
    components: {},
    props: {
        side: {
            type: String,
            default: () => "leading",
            validator: function (value) {
                return ["leading", "trailing"].indexOf(value) !== -1;
            },
        },
    },
};
</script>
