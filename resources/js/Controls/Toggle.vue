<template>
    <Switch
        v-if="mode === 'default'"
        v-model="enabled"
        :disabled="disabled"
        :class="[
            enabled ? 'bg-blue-600' : 'bg-gray-200',
            disabled ? 'opacity-50' : '',
            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        ]"
    >
        <span class="sr-only">Use setting</span>
        <span
            aria-hidden="true"
            :class="[
                enabled ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
            ]"
        />
    </Switch>
    <Switch
        v-else-if="mode === 'short'"
        v-model="enabled"
        :disabled="disabled"
        :class="{ 'opacity-50': disabled }"
        class="relative inline-flex items-center justify-center flex-shrink-0 w-10 h-5 rounded-full cursor-pointer group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
        <span class="sr-only">Use setting</span>
        <span
            aria-hidden="true"
            class="absolute w-full h-full rounded-md pointer-events-none"
        />
        <span
            aria-hidden="true"
            :class="[
                enabled ? 'bg-blue-600' : 'bg-gray-200',
                'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200',
            ]"
        />
        <span
            aria-hidden="true"
            :class="[
                enabled ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200',
            ]"
        />
    </Switch>
</template>

<script>
import { watchEffect, ref } from "vue";
import { Switch } from "@headlessui/vue";

export default {
    components: {
        Switch,
    },
    emits: ["update:modelValue"],
    props: {
        mode: {
            type: String,
            default: "default",
            validator: function (value) {
                return ["default", "short"].indexOf(value) !== -1;
            },
        },
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
        const enabled = ref(props.value);
        watchEffect(() => {
            emit("update:modelValue", enabled.value);
        });
        return {
            enabled,
        };
    },
};
</script>
