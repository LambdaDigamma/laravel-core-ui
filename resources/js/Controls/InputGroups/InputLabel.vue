<template>
    <div class="flex justify-between space-x-2">
        <label class="block text-sm font-medium leading-5 text-gray-700" v-bind="$attrs">
            <span v-if="value">{{ value }}</span>
            <span v-else><slot></slot></span>
        </label>

        <span v-if="optional" class="text-sm text-gray-500">Optional</span>
    </div>
</template>

<script>
export default {
    name: "InputLabel",
    inheritAttrs: false,
    props: {
        value: {
            type: String,
            default: "",
        },
        optional: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
