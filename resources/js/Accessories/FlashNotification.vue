<template>
    <div>
        <div
            class="fixed inset-0 right-0 flex items-end justify-center px-4 py-6 mr-2 pointer-events-none sm:p-6 sm:items-end sm:justify-end z-90"
        >
            <transition
                enter-active-class="transition duration-300 ease-out transform"
                enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div
                    v-if="showSuccess || showWarning || showInfo || showError"
                    class="w-full max-w-sm bg-white rounded-lg shadow-lg pointer-events-auto z-90"
                >
                    <div
                        class="overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5"
                    >
                        <div class="p-4">
                            <div class="flex items-start">
                                <div class="flex-shrink-0">
                                    <heroicon
                                        v-if="showSuccess"
                                        name="check-circle-outline"
                                        class="w-6 h-6 text-green-400"
                                    />
                                    <heroicon
                                        v-if="showInfo"
                                        name="information-circle-outline"
                                        class="w-6 h-6 text-blue-400"
                                    />
                                    <heroicon
                                        v-if="showWarning"
                                        name="exclamation-circle-outline"
                                        class="w-6 h-6 text-yellow-400"
                                    />
                                    <heroicon
                                        v-if="showError"
                                        name="x-circle-outline"
                                        class="w-6 h-6 text-red-400"
                                    />
                                </div>
                                <div class="ml-3 w-0 flex-1 pt-0.5">
                                    <p
                                        class="text-sm font-medium leading-5 text-gray-900"
                                    >
                                        <span v-if="showSuccess">
                                            Aktion erfolgreich!
                                        </span>
                                        <span v-else-if="showInfo">
                                            Eine Information!
                                        </span>
                                        <span v-else-if="showWarning">
                                            Pass auf!
                                        </span>
                                        <span v-else-if="showError">
                                            Aktion fehlgeschlagen!
                                        </span>
                                    </p>
                                    <p
                                        class="mt-1 text-sm leading-5 text-gray-500"
                                    >
                                        <span v-if="showSuccess">{{
                                            $page.props.flash.success
                                        }}</span>
                                        <span v-else-if="showInfo">{{
                                            $page.props.flash.info
                                        }}</span>
                                        <span v-else-if="showWarning">{{
                                            $page.props.flash.warning
                                        }}</span>
                                        <span v-else-if="showError && Object.keys($page.props.errors).length === 0 && obj.constructor === Object">{{
                                            $page.props.flash.error
                                        }}</span>
                                        <ul v-else-if="showError" class="pl-4 list-disc">
                                            <li v-for="(error, index) in $page.props.errors" :key="index" class="mb-1">
                                                {{ error }}
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                                <div class="flex flex-shrink-0 ml-4">
                                    <button
                                        class="inline-flex text-gray-400 transition duration-150 ease-in-out focus:outline-none focus:text-gray-500 hover:bg-gray-50 p-1.5 -mt-1.5 -mr-1.5"
                                        @click="show = false"
                                    >
                                        <heroicon name="x-solid" class="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import Heroicon from "./Heroicon.vue";

export default {
    name: "FlashNotification",
    components: { Heroicon },
    props: {},
    data() {
        return {
            show: true
        };
    },
    computed: {
        hasError() {
            return (
                this.$page.props.flash.error ||
                Object.keys(this.$page.props.errors).length > 0
            );
        },
        showSuccess() {
            return this.$page.props.flash.success && this.show;
        },
        showWarning() {
            return this.$page.props.flash.warning && this.show;
        },
        showInfo() {
            return this.$page.props.flash.info && this.show;
        },
        showError() {
            return this.hasError && this.show;
        }
    },
    watch: {
        "$page.props.flash": {
            handler() {
                this.show = true;
                setTimeout(() => (this.show = false), 5000);
            },
            deep: true
        }
    }
};
</script>
