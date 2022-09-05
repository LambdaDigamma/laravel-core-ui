<template>
    <div v-if="pills">
        <div class="sm:hidden">
            <label for="tabs" class="sr-only">Wähle einen Tab aus:</label>
            <select
                id="tabs"
                name="tabs"
                class="block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
                <option
                    v-for="item in items"
                    :key="item.value"
                    :selected="item.value === currentlyActive"
                >
                    {{ item.title }}
                </option>
            </select>
        </div>
        <div class="hidden sm:block">
            <nav class="flex space-x-4" aria-label="Tabs">
                <button
                    v-for="item in items"
                    :key="item.value"
                    href="#"
                    class="px-3 py-2 text-sm font-medium rounded-md"
                    :class="{
                        'text-gray-600 hover:text-gray-800':
                            item.value !== currentlyActive,
                        'text-gray-800 bg-gray-200':
                            item.value === currentlyActive,
                    }"
                    :aria-current="
                        item.value === currentlyActive ? 'page' : null
                    "
                    @click.prevent="
                        $emit('update:modelValue', item.value);
                        currentlyActive = item.value;
                    "
                >
                    {{ item.title }}
                </button>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    name: "TabBar",
    props: {
        pills: {
            type: Boolean,
            required: false,
            default: () => true,
        },
        items: {
            type: Array,
            required: true,
            default: () => [],
        },
        modelValue: {
            type: String,
            required: false,
            default: () => null,
        },
    },
    emits: ["update:modelValue"],
    data() {
        return {
            currentlyActive: this.modelValue ?? this.items[0].value,
        };
    },
};
</script>
