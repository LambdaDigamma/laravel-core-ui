<template>
    <div :class="containerClass">
        <div
            class="flex"
            :class="{
                'justify-between': isOptional,
                'justify-start': !isOptional,
            }"
            v-if="isOptional || label"
        >
            <label
                :for="id"
                class="block text-sm font-medium leading-5 text-gray-700 dark:text-dark-300"
            >
                {{ label }}
            </label>
            <span class="text-sm leading-5 text-gray-500" v-if="isOptional"
                >
                Optional
            </span
            >
        </div>
        <div
            class="relative rounded-md shadow-sm"
            :class="{ 'mt-1': this.label !== undefined }"
        >
            <input
                :id="id"
                :placeholder="placeholder"
                :type="type"
                :disabled="disabled"
                :value="modelValue"
                v-bind="$attrs"
                :class="{
                    'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:ring-red':
                        this.hasError,
                    'border-gray-200 focus:ring-tf-blue dark:focus:ring-emerald-700': !this.hasError,
                    'opacity-50': disabled,
                }"
                class="block w-full pr-10 placeholder-gray-400 border rounded-md form-input sm:text-sm sm:leading-5 dark:bg-dark-700 dark:border-dark-600 dark:placeholder-dark-500 dark:selection:bg-emerald-300 dark:selection:bg-opacity-40"
                @input="$emit('update:modelValue', $event.target.value)"
                @keydown.enter.prevent=""
                ref="input"
            />
            <div
                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none "
                v-if="errors.length"
            >
                <svg
                    class="w-5 h-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
        </div>
        <p v-if="hint || errors.length" class="mx-2 mt-2 text-sm text-gray-500">
            <span v-if="errors.length" class="text-red-600">
                {{ errors[0] }}
            </span>
            <span v-else-if="hint">
                {{ hint }}
            </span>
        </p>
    </div>
</template>

<script>
export default {
    name: "TextInput",
    inheritAttrs: false,
    props: {
        id: {
            type: String,
        },
        isOptional: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: "text",
        },
        modelValue: [String, Number],
        label: String,
        placeholder: String,
        errors: {
            type: Array,
            default: () => [],
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        hint: {
            type: String,
            default: null,
        },
        containerClass: {
            type: String,
            default: "",
        },
    },
    methods: {
        focus() {
            this.$refs.input.focus();
        },
        select() {
            this.$refs.input.select();
        },
        setSelectionRange(start, end) {
            this.$refs.input.setSelectionRange(start, end);
        },
    },
    computed: {
        hasError() {
            return this.errors.length !== 0;
        },
    },
};
</script>

<style scoped></style>
