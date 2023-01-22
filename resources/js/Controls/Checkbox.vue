<template>
    <div class="flex rounded-md shadow-sm" :class="{ 'opacity-50' :disabled }">
        <input
            v-bind="$attrs"
            v-model="checked"
            type="checkbox"
            class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            :disabled="disabled"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";

export default defineComponent({
    name: "Checkbox",
    inheritAttrs: false,
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const checked = ref(props.value);
        watchEffect(() => {
            emit("update:modelValue", checked.value);
        });

        return { checked };
    },
});
</script>
