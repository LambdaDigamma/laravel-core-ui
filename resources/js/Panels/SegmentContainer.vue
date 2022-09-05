<template>
    <div class="space-y-1">
        <input-label :value="label"></input-label>
        <div
            class="relative w-full mt-5 border border-gray-200 rounded-lg bg-gray-50"
        >
            <fieldset class="flex flex-row justify-center -mt-5">
                <legend class="sr-only">{{ label }}</legend>
                <div
                    class="relative bg-gray-100 p-0.5 rounded-md items-center inline-flex space-x-0.5"
                >
                    <label
                        class="relative flex flex-col cursor-pointer"
                        v-for="(segment, index) in segments"
                        :key="index"
                    >
                        <div
                            class="p-1.5 px-5 rounded-md text-gray-400 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 inline-flex justify-center transition"
                            :class="[
                                currentSelection === segment.value
                                    ? 'bg-white shadow-sm z-10'
                                    : 'hover:bg-gray-200',
                            ]"
                            style="min-width: 5rem"
                            @click="$emit('update:modelValue', segment.value)"
                        >
                            <input
                                type="radio"
                                name="pricing_plan"
                                :value="segment.value"
                                v-model="currentSelection"
                                class="hidden text-blue-600 border-gray-300 focus:ring-blue-500"
                                :aria-labelledby="segment.value + '-label'"
                            />
                            <span
                                :id="segment.value + '-label'"
                                class="w-full text-sm font-medium text-center text-gray-600"
                            >
                                {{ segment.title }}
                            </span>
                        </div>
                    </label>
                </div>
            </fieldset>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import InputLabel from "@/Controls/InputGroups/InputLabel.vue";
export default {
    name: "SegmentContainer",
    components: { InputLabel },
    props: {
        modelValue: {
            type: String,
            required: true,
        },
        segments: {
            type: Array,
            required: true,
        },
        label: {
            type: String,
            default: "",
        },
    },
    emits: ["update:modelValue"],
    data() {
        return {
            currentSelection: this.modelValue ?? this.segments[0].value ?? "",
        };
    },
};
</script>
