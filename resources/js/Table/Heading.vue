<template>
    <th class="px-6 py-3 bg-cool-gray-50 dark:bg-dark-700" v-bind="$attrs">
        <div
            v-if="sortable === null"
            class="text-xs font-medium leading-4 tracking-wider text-left uppercase text-cool-gray-500 dark:text-dark-400"
        >
            <slot></slot>
        </div>
        <!-- <button
            v-else
            class="flex items-center space-x-1 text-xs font-medium leading-4 tracking-wider text-left uppercase text-cool-gray-500 group focus:outline-none focus:underline"
        >
            <span><slot></slot></span>

            <span class="relative flex items-center">
                <div v-if="multiColumn !== null && direction === 'asc'">
                    <svg
                        class="w-3 h-3 group-hover:opacity-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 15l7-7 7 7"
                        ></path>
                    </svg>
                    <svg
                        class="absolute w-3 h-3 opacity-0 group-hover:opacity-100"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </div>

                <div
                    v-else-if="multiColumn !== null && direction === 'desc'"
                    class="absolute opacity-0 group-hover:opacity-100"
                >
                    <svg
                        class="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 15l7-7 7 7"
                        ></path>
                    </svg>
                    <svg
                        class="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </div>
                <div v-else-if="multiColumn !== null">
                    <svg
                        class="w-3 h-3 group-hover:opacity-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </div>

                @else
                <svg
                    class="w-3 h-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 15l7-7 7 7"
                    ></path>
                </svg>
                @endif @else @if ($direction === 'asc')
                <svg
                    class="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
                @elseif ($direction === 'desc')
                <svg
                    class="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 15l7-7 7 7"
                    ></path>
                </svg>
                @else
                <svg
                    class="w-3 h-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 15l7-7 7 7"
                    ></path>
                </svg>
                @endif @endif
            </span>
        </button>
        @endif -->
    </th>
</template>
<script>
export default {
    name: "Heading",
    props: {
        sortable: {
            type: String,
            default: () => null
        },
        direction: {
            type: String,
            default: () => null
        },
        multiColumn: {
            type: String,
            default: () => null
        }
    }
};
</script>
