<template>
    <div :class="{ 'opacity-50': disabled }">
        <label
            :for="name"
            v-if="label"
            class="block text-sm font-medium leading-5 text-gray-700 dark:text-dark-300"
        >
            {{ label }}
            <select
                :name="name"
                :value="modelValue"
                :disabled="disabled"
                v-bind="$attrs"
                ref="input"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-dark-700 dark:border-dark-600"
                @input="$emit('update:modelValue', $event.target.value)"
            >
                <slot></slot>
            </select>
        </label>
    </div>
</template>

<script>
export default {
    name: "SelectInput",
    props: {
        modelValue: {
            type: [String, Number, Boolean],
            default: null,
        },
        label: {
            type: String,
            required: false,
        },
        name: {
            type: String,
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    emits: ["update:modelValue"],
    methods: {
        focus() {
            this.$refs.input.focus();
        },
        select() {
            this.$refs.input.select();
        },
    },
};
</script>
