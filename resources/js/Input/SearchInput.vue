<template>
    <div class="">
        <label :for="name" class="sr-only">{{ placeholder }}</label>
        <div class="relative">
            <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
                <svg
                    class="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
            <input
                :id="name"
                class="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:placeholder-gray-400 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                type="search"
                :placeholder="placeholder"
                :value="modelValue"
                @input="updateValue"
            />
        </div>
    </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        modelValue: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "Suchen…",
        },
        name: {
            type: String,
            default: "search",
        },
    },
    emits: ["update:modelValue"],
    setup(props, context) {
        const updateValue = (event) => {
            context.emit("update:modelValue", event.target.value);
        };

        return { updateValue };
    },
});
</script>
