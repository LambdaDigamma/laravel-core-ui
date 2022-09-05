<template>
    <input-group>
        <span
            class="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm"
        >
            <slot name="addon"></slot>
        </span>
        <input
            :value="modelValue"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
            ref="input"
            class="flex-1 block w-full min-w-0 px-3 py-2 border-gray-300 rounded-none focus:ring-blue-500 focus:border-blue-500 rounded-r-md sm:text-sm"
            :class="{}"
        />
    </input-group>
</template>
<script>
import InputGroup from "./InputGroup.vue";
export default {
    name: "AddOnInput",
    inheritAttrs: false,
    components: {
        InputGroup,
    },
    props: ["modelValue"],
    emits: ["update:modelValue"],
    computed: {
        hasTrailingIcon() {
            return !!this.$slots.trailingIcon;
        },
        hasLeadingIcon() {
            return !!this.$slots.leadingIcon;
        },
    },
};
</script>
