<template>
    <div class="bg-white rounded-lg shadow">
        <form action="#" :method="method">
            <div class="px-4 py-5 sm:p-6">
                <slot></slot>
            </div>
            <div class="px-4 py-3 text-right rounded-b-lg bg-gray-50 sm:px-6">
                <PrimaryButton type="submit" @click.prevent="$emit('save')">
                    {{ actionButton }}
                </PrimaryButton>
            </div>
        </form>
    </div>
</template>

<script>
import PrimaryButton from "@/Buttons/PrimaryButton.vue";
import TextInput from "@/Input/TextInput.vue";
export default {
    name: "FormPanel",
    components: { TextInput, PrimaryButton },
    props: {
        actionButton: {
            type: String,
            default: () => "Speichern",
        },
        method: {
            type: String,
            default: () => "POST",
        },
    },
};
</script>

<style scoped></style>
