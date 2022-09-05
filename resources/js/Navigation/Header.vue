<template>
    <header class="py-10">
        <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-shrink">
                <h2
                    class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate"
                >
                    {{ title }}
                </h2>
            </div>
            <div class="flex flex-shrink-0 mt-4 md:mt-0 md:ml-4">
                <slot name="default"></slot>
            </div>
        </div>
        <div>
            <slot name="nav"></slot>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        title: {
            type: String,
            default: () => "",
        },
    },
};
</script>

<style scoped></style>
