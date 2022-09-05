<template>
    <input-group>
        <input
            v-bind="$attrs"
            class="block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            ref="input"
        />
    </input-group>
</template>

<script>
import InputGroup from "@/Controls/InputGroups/InputGroup.vue";
export default {
    components: { InputGroup },
    props: ["modelValue"],
    emits: ["update:modelValue"],
    inheritAttrs: false,
    methods: {
        focus() {
            this.$refs.input.focus();
        },
    },
};
</script>
