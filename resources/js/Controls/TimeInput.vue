<template>
    <input
        type="time"
        placeholder="hrs:mins"
        ref="input"
        pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$"
        class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        :disabled="disabled"
        :class="{ 'opacity-40': disabled }"
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
    />
</template>

<script>
export default {
    name: "TimeInput",
    props: {
        modelValue: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    emits: ["update:modelValue"],
};
</script>

<style></style>
