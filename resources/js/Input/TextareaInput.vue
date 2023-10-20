<template>
    <div>
        <div
            class="flex"
            :class="{
                'justify-between': isOptional,
                'justify-start': !isOptional,
                'mb-1': isOptional || label,
            }"
        >
            <label
                v-if="label"
                :for="name"
                class="block text-sm font-medium leading-5 text-gray-700"
            >
                {{ label }}
            </label>
            <span class="text-sm leading-5 text-gray-500" v-if="isOptional">
                Optional
            </span>
        </div>
        <div class="relative rounded-md shadow-sm">
            <textarea
                :id="name"
                :rows="rows"
                v-model="model"
                :placeholder="placeholder"
                :class="{ 'whitespace-pre': noWrap }"
                class="block w-full border-gray-200 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                ref="input"
            ></textarea>
            <div
                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
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
        <p v-if="hint || errors.length" class="mt-2 text-sm text-gray-500">
            <span v-if="errors.length" class="text-red-600">
                {{ errors[0] }}
            </span>
            <span v-else-if="hint">
                {{ hint }}
            </span>
        </p>
    </div>
</template>

<script setup lang="ts">
import {defineProps, defineOptions, ref, defineModel} from "vue";

defineOptions({
    inheritAttrs: false
})

defineEmits(["update:modelValue"])

const model = defineModel<string>()

const {
    rows = 3,
    placeholder = "",
    hint = null,
    isOptional = false,
    errors = [],
    noWrap = false,
} = defineProps<{
    name?: string,
    label?: string,
    rows?: number,
    placeholder?: string,
    hint?: string,
    isOptional?: boolean,
    errors?: string[],
    noWrap?: boolean,
}>()

const input = ref<HTMLInputElement>();

const focus = () => {
    input.value.focus();
}

const select = () => {
    input.value.select();
}

</script>
