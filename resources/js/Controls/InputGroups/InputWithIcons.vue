<template>
    <input-group>
        <div
            v-if="hasLeadingIcon"
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
            <div class="w-5 h-5 text-gray-400">
                <slot name="leadingIcon"></slot>
            </div>
        </div>

        <input
            :value="modelValue"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
            ref="input"
            class="block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            :class="{
                'pr-10': hasTrailingIcon,
                'pl-10': hasLeadingIcon,
            }"
        />

        <div
            v-if="hasTrailingIcon"
            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
        >
            <div class="w-5 h-5 text-gray-400">
                <slot name="trailingIcon"></slot>
            </div>
        </div>
    </input-group>
</template>
<script>
import InputGroup from "@/Controls/InputGroups/InputGroup.vue";
export default {
    name: "InputWithIcons",
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
