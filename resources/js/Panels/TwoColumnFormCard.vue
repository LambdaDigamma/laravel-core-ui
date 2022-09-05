<template>
    <div class="px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                    <slot name="title"></slot>
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                    <slot name="description"></slot>
                </p>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form class="space-y-6" @submit.prevent="$emit('submitted')">
                    <div class="grid grid-cols-6 gap-6">
                        <slot name="form"></slot>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "TwoColumnFormCard"
};
</script>
