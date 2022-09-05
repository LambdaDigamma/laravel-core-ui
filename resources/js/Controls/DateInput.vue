<template>
    <v-date-picker
        class="block"
        v-bind="$attrs"
        mode="date"
        :model-config="modelConfig"
        is24hr
        timezone="Europe/Berlin"
    >
        <template v-slot="{ inputValue, inputEvents }">
            <input
                type="text"
                class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                :class="{ 'opacity-40': disabled }"
                :value="inputValue"
                :disabled="disabled"
                v-on="inputEvents"
            />
        </template>
    </v-date-picker>
</template>
<script>
import VCalendar from "v-calendar";

export default {
    name: "DateInput",
    components: { VCalendar },
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            date: null,
            modelConfig: {
                type: "string",
                mask: "YYYY-MM-DD",
            },
        };
    },
    methods() {},
};
</script>
