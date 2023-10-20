<template>
    <tr>
        <td
            v-bind="$attrs"
            class="px-6 py-4 text-sm leading-5 whitespace-no-wrap text-gray-900"
            :colspan="colspan"
        >
            <slot></slot>
        </td>
    </tr>
</template>

<script setup lang="ts">
import { defineProps } from "vue"

const props = withDefaults(defineProps<{
    colspan?: number
}>(), {
    colspan: 1,
})

</script>
