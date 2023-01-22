<template>
    <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 flex flex-row justify-between dark:bg-dark-800 dark:border-dark-700">
        <DialogTitle class="min-w-0 flex-1 text-lg font-medium leading-6 text-gray-900 dark:text-white" as="h3" v-if="dialog">
            <slot></slot>
        </DialogTitle>
        <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white" v-else>
            <slot></slot>
        </h3>
    </div>
</template>

<script>
import { DialogTitle } from "@headlessui/vue";
export default {
    name: "SimpleCardHeading",
    components: { DialogTitle },
    props: {
        dialog: {
            type: Boolean,
            default: () => false,
        }
    }
}
</script>

<style scoped>

</style>
