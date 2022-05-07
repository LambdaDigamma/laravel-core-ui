<template>
    <button
        v-bind="$attrs"
        class="px-1 py-2 text-white bg-red-500 shadow"
        :class="{
            'rounded-l': side === 'leading',
            'rounded-r': side === 'trailing',
        }"
    >
        <svg
            class="w-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
        </svg>
    </button>
</template>

<script>
export default {
    name: "DeleteButtonHandle",
    props: {
        side: {
            type: String,
            default: "leading",
            validator: function (value) {
                return ["leading", "trailing"].indexOf(value) !== -1;
            },
        },
    },
};
</script>
