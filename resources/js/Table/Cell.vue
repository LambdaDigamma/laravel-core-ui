<template>
    <td
        v-bind="$attrs"
        class="px-6 py-4 text-sm leading-5 whitespace-no-wrap text-cool-gray-900"
    >
        <slot></slot>
    </td>
</template>
<script>
export default {
    name: "Cell",
};
</script>
