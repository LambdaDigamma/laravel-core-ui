<template>
    <span
        class="inline-flex items-center py-0.5 font-medium"
        :class="{
            'bg-gray-100 text-gray-800': color === 'gray',
            'bg-red-100 text-red-800': color === 'red',
            'bg-yellow-100 text-yellow-800': color === 'yellow',
            'bg-green-100 text-green-800': color === 'green',
            'bg-blue-100 text-blue-800': color === 'blue',
            'bg-indigo-100 text-indigo-800': color === 'indigo',
            'bg-purple-100 text-purple-800': color === 'purple',
            'bg-pink-100 text-pink-800': color === 'pink',
            'bg-orange-100 text-orange-800': color === 'orange',
            'px-2.5 text-xs': size === 'sm' && !remove,
            'px-3 text-sm': size === 'lg' && !remove,
            'pl-2 pr-0.5 text-xs': size === 'sm' && remove,
            'pl-2.5 pr-1 text-sm': size === 'lg' && remove,
            'rounded-full': !rounded,
            rounded: rounded && size === 'sm',
            'rounded-sm': rounded && size === 'lg',
        }"
        @click.prevent="$emit('elementClick')"
    >
        <svg
            v-if="dot"
            class="-ml-0.5 mr-1.5 h-2 w-2"
            :class="{
                'text-gray-400': color === 'gray',
                'text-red-400': color === 'red',
                'text-yellow-400': color === 'yellow',
                'text-green-400': color === 'green',
                'text-blue-400': color === 'blue',
                'text-indigo-400': color === 'indigo',
                'text-orange-400': color === 'orange',
                '-ml-0.5 mr-1.5': size === 'sm',
                '-ml-1 mr-1.5': size === 'lg',
            }"
            fill="currentColor"
            viewBox="0 0 8 8"
        >
            <circle cx="4" cy="4" r="3" />
        </svg>
        <span>
            {{ text }}
        </span>
        <button
            v-if="remove"
            type="button"
            class="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center focus:outline-none"
            :class="{
                'text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500 focus:text-white':
                    color === 'gray',
                'text-red-400 hover:bg-red-200 hover:text-red-500 focus:bg-red-500 focus:text-white':
                    color === 'red',
                'text-yellow-400 hover:bg-yellow-200 hover:text-yellow-500 focus:bg-yellow-500 focus:text-white':
                    color === 'yellow',
                'text-green-400 hover:bg-green-200 hover:text-green-500 focus:bg-green-500 focus:text-white':
                    color === 'green',
                'text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:bg-blue-500 focus:text-white':
                    color === 'blue',
                'text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500 focus:text-white':
                    color === 'indigo',
                'text-orange-400 hover:bg-orange-200 hover:text-orange-500 focus:bg-orange-500 focus:text-white':
                    color === 'orange',
            }"
            @click.prevent.stop="$emit('remove')"
        >
            <span class="sr-only">Entfernen</span>
            <svg
                class="w-2 h-2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 8 8"
            >
                <path
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M1 1l6 6m0-6L1 7"
                />
            </svg>
        </button>
    </span>
</template>
<script>
export default {
    name: "Badge",
    props: {
        text: {
            type: [String, Number],
            default: null,
        },
        color: {
            type: String,
            validator: function (value) {
                return (
                    [
                        "gray",
                        "red",
                        "yellow",
                        "green",
                        "blue",
                        "indigo",
                        "orange",
                    ].indexOf(value) !== -1
                );
            },
            default: "gray",
        },
        size: {
            type: String,
            validator: function (value) {
                return ["sm", "lg"].indexOf(value) !== -1;
            },
            default: "sm",
        },
        dot: {
            type: Boolean,
            default: false,
        },
        rounded: {
            type: Boolean,
            default: false,
        },
        remove: {
            type: Boolean,
            default: false,
        },
    },
    emits: ["elementClick", "remove"],
};
</script>
