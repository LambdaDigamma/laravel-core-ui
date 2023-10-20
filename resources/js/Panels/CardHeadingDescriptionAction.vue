<script setup lang="ts">

</script>

<template>
    <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div class="ml-4 mt-4">
                <h3 class="text-base font-semibold leading-6 text-gray-900">
                    <slot name="heading"></slot>
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                    <slot name="description"></slot>
                </p>
            </div>
            <div class="ml-4 mt-4 flex-shrink-0">
                <slot name="action"></slot>
            </div>
        </div>
    </div>
</template>
