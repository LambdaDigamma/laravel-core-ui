<template>
    <div class="overflow-hidden bg-white rounded-lg shadow">
        <div class="px-4 py-5 sm:p-6">
            <dt class="text-sm font-medium text-gray-500 truncate">
                <slot name="label"></slot>
            </dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">
                <slot name="metric"></slot>
            </dd>
        </div>
    </div>
</template>
<script>
export default {
    name: "SimpleStatItem"
};
</script>
