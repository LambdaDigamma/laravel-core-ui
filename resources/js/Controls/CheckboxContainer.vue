<template>
    <div class="relative flex items-start">
        <div class="flex items-center h-5">
            <Checkbox
                :id="name"
                :name="name"
                :disabled="disabled"
                :aria-describedby="descriptionId"
                v-bind="$attrs"
            />
        </div>
        <div class="ml-3 text-sm" :class="{ 'opacity-50': disabled }">
            <label :for="name" class="font-medium text-gray-700">
                <slot name="label"></slot>
            </label>
            <p :id="descriptionId" v-if="!inline" class="text-gray-500">
                <slot name="description"></slot>
            </p>
            <span v-else-if="inline" :id="descriptionId" class="text-gray-500">
                <slot name="description"></slot>
            </span>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Checkbox from "@/Controls/Checkbox.vue";

export default defineComponent({
    name: "CheckboxContainer",
    components: { Checkbox },
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            required: true,
        },
        inline: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    setup(props) {
        const descriptionId = ref(`${props.name}-description`);

        return { descriptionId };
    },
});
</script>
