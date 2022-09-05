<template>
    <transition
        enter-active-class="duration-75 ease-out"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div
            class="fixed inset-0 inset-x-0 top-0 bottom-0 left-0 right-0 flex items-center justify-center px-4 pb-4 z-70"
            v-if="showing"
        >
            <div class="fixed inset-0 z-30 transition-opacity" @click="close">
                <div
                    class="absolute inset-0"
                    style="opacity: 80%; background: black"
                ></div>
            </div>

            <div
                class="relative overflow-y-auto transition-all transform bg-white rounded-lg shadow-lg z-90"
                style="max-height: 90%"
                :class="modalClass"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-preview"
                v-if="showing"
                ref="scrollArea"
            >
                <button
                    v-if="showClose"
                    aria-label="close"
                    class="absolute top-0 right-0 inline-flex items-center justify-center p-1 mx-4 my-4 text-xl text-gray-500 bg-gray-100 rounded-full shadow-sm md:p-1.5 opacity-80 z-100"
                    @click.prevent="close"
                >
                    <svg
                        class="w-4 h-4 text-current md:w-5 md:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
                <slot />
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "Modal",
    props: {
        showing: {
            required: true,
            type: Boolean,
        },
        showClose: {
            type: Boolean,
            default: () => true,
        },
        modalClass: String,
    },
    // watch: {
    //     showing(value) {
    //         if (value) {
    //             return document
    //                 .querySelector("body")
    //                 .classList.add("overflow-hidden");
    //         }

    //         // document.querySelector("body").classList.remove("overflow-hidden");
    //     },
    // },
    methods: {
        close() {
            // document.querySelector("body").classList.remove("overflow-hidden");
            this.$emit("close");
        },
    },
};
</script>

<style scoped></style>
