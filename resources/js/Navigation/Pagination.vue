<template>
    <div class="flex flex-wrap">
        <template v-for="(link, key) in links">
            <span
                v-if="link.url === null"
                :key="key"
                class="inline-flex rounded-md shadow-sm"
                :class="{
                    'ml-auto': link.label === 'Nächste',
                    'mr-3': link.label !== 'Nächste',
                }"
            >
                <button
                    disabled
                    class="inline-flex items-center px-4 py-2 text-sm font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md opacity-50"
                >
                    {{ link.label }}
                </button>
            </span>

            <span class="inline-flex rounded-md shadow-sm" v-else>
                <button
                    type="button"
                    :key="key"
                    :class="{
                        'bg-white border-gray-300 text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring-blue active:text-gray-800 active:bg-gray-50':
                            link.active,
                        '': !link.active,
                        'ml-auto': link.label === 'Nächste',
                    }"
                    @click="selectedButton(link.url)"
                    class="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium leading-6 transition duration-150 ease-in-out border rounded-md"
                >
                    {{ link.label }}
                </button>
            </span>
        </template>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        links: Array,
    },
    methods: {
        selectedButton(url) {
            this.$inertia.visit(url);
        },
    },
};
</script>

<style scoped></style>
