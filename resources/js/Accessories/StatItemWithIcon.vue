<template>
    <div
        :aria-disabled="disabled ? true : undefined"
        class="relative px-4 pt-5 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6"
        :class="{ 'pb-12': !removeLink, 'pb-6': removeLink }"
    >
        <dt :class="{ 'opacity-40': disabled }">
            <div
                class="absolute p-3 rounded-md"
                :class="{
                    'bg-sky-700': variant === 'blue',
                    'bg-red-600': variant === 'red',
                }"
            >
                <div class="w-6 h-6 text-white">
                    <slot name="icon"></slot>
                </div>
            </div>
            <p class="ml-16 text-sm font-medium text-gray-500 truncate">
                {{ label }}
            </p>
        </dt>
        <dd
            class="flex items-baseline ml-16"
            :class="{ 'opacity-40': disabled, 'sm:pb-7 pb-6': !removeLink }"
        >
            <p class="text-2xl font-semibold text-gray-900">{{ value }}</p>
            <p
                v-if="changeType"
                :class="[
                    changeType === 'increase'
                        ? 'text-green-600'
                        : 'text-red-600',
                    'ml-2 flex items-baseline text-sm font-semibold',
                ]"
            >
                <ArrowSmUpIcon
                    v-if="changeType === 'increase'"
                    class="self-center flex-shrink-0 w-5 h-5 text-green-500"
                    aria-hidden="true"
                />
                <ArrowSmDownIcon
                    v-else-if="changeType === 'decrease'"
                    class="self-center flex-shrink-0 w-5 h-5 text-red-500"
                    aria-hidden="true"
                />
                <span class="sr-only">
                    {{ changeType === "increase" ? "Increased" : "Decreased" }}
                    by
                </span>
                {{ change }}
            </p>
            <div
                v-if="!removeLink"
                class="absolute inset-x-0 bottom-0 px-4 py-4 sm:px-6"
                :class="{
                    'bg-sky-700': invertedColors && variant === 'blue',
                    'bg-red-600': invertedColors && variant === 'red',
                    'bg-gray-50': !invertedColors,
                }"
            >
                <div class="text-sm">
                    <inertia-link
                        :href="href"
                        class="font-medium"
                        :class="{
                            'text-sky-100 hover:text-white':
                                invertedColors && variant === 'blue',
                            'text-sky-700 hover:text-sky-600':
                                !invertedColors && variant === 'blue',
                            'text-red-100 hover:text-white':
                                invertedColors && variant === 'red',
                            'text-red-600 hover:text-red-500':
                                !invertedColors && variant === 'red',
                        }"
                    >
                        {{ linkText }}
                    </inertia-link>
                </div>
            </div>
        </dd>
    </div>
</template>
<script>
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/vue/solid";

export default {
    name: "StatItemWithIcon",
    components: {
        ArrowSmDownIcon,
        ArrowSmUpIcon,
    },
    props: {
        label: {
            type: String,
            default: "",
        },
        value: {
            type: [String, Number],
        },
        href: {
            type: String,
            default: "#",
        },
        changeType: {
            type: String,
            required: false,
            default: null,
        },
        variant: {
            type: String,
            validator: function (value) {
                return ["red", "blue"].indexOf(value) !== -1;
            },
            default: "blue",
        },
        change: {
            type: [String, Number],
            required: false,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        invertedColors: {
            type: Boolean,
            default: false,
        },
        linkText: {
            type: String,
            default: "Details",
        },
        removeLink: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
