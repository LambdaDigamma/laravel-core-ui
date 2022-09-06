<template>
    <div class="bg-white rounded-lg shadow">
        <form :method="method" @submit.prevent="$emit('save')">
            <div class="px-4 py-5 sm:p-6">
                <slot></slot>
            </div>
            <div class="px-4 py-3 text-right rounded-b-lg bg-gray-50 sm:px-6">
                <PrimaryButton button-type="submit" :disabled="disabled">
                    {{ actionButton }}
                </PrimaryButton>
            </div>
        </form>
    </div>
</template>

<script>
import PrimaryButton from "@/Buttons/PrimaryButton.vue";

export default {
    name: "FormPanel",
    components: { PrimaryButton },
    props: {
        actionButton: {
            type: String,
            default: () => "Speichern",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        method: {
            type: String,
            default: () => "POST",
        },
    },
    emits: ["save"],
};
</script>

<style scoped></style>
