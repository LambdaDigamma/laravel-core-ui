<template>
    <select
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        ref="input"
        class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    >
        <slot></slot>
    </select>
</template>
<script>
export default {
    name: "NativeSelect",
    props: ["modelValue"],
    emits: ["update:modelValue"],
    methods: {
        focus() {
            this.$refs.input.focus();
        },
    },
};
</script>
