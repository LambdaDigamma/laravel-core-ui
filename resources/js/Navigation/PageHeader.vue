<template>
    <div>
        <div
            :class="{
                'max-w-7xl mx-auto': container,
                'px-4 sm:px-6 md:px-8': padding
            }"
        >
            <div>
                <slot name="top"></slot>
            </div>
            <div
                class="mt-2 md:flex md:items-start md:justify-between"
                :class="{ 'pb-6': !hasBottom }"
            >
                <div class="flex-1 min-w-0">
                    <h2
                        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                    >
                        <slot name="title"></slot>
                    </h2>
                    <p v-if="hasSubtitle" class="text-gray-600">
                        <slot name="subtitle"> </slot>
                    </p>
                    <div
                        v-if="hasMeta"
                        class="flex flex-col mt-1 sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6"
                    >
                        <slot name="meta"></slot>
                    </div>
                </div>

                <div class="flex flex-shrink-0 mt-4 md:mt-0 md:ml-4">
                    <slot name="actions"></slot>
                </div>
            </div>
            <div v-if="hasBottom" class="mt-6">
                <slot name="bottom"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "PageHeader",
    props: {
        container: {
            type: Boolean,
            default: true
        },
        padding: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        hasBottom() {
            return !!this.$slots.bottom;
        },
        hasMeta() {
            return !!this.$slots.meta;
        },
        hasSubtitle() {
            return !!this.$slots.subtitle;
        }
    }
};
</script>
