<template>
    <div class="w-full max-w-md px-8 lg:py-6">
        <div
            class="w-full overflow-hidden bg-white shadow-xl  aspect-w-9 aspect-h-16 rounded-xl"
        >
            <div class="h-full overflow-y-auto disable-scrollbars">
                <slot name="default"> </slot>
            </div>
        </div>
    </div>
</template>

<script>
import TextInput from "@/Input/TextInput.vue";
import Panel from "@/Panels/Panel.vue";

export default {
    name: "OnboardingPanel",
    components: { TextInput, Panel },
    data() {
        return {
            showSlide: false,
        };
    },
    mounted() {
        setTimeout(() => {
            this.showSlide = true;
        }, 500);
    },
    methods: {
        close(callback) {
            this.showSlide = false;

            if (callback) {
                callback();
            }
        },
    },
};
</script>
