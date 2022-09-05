<template>
    <MenuItem v-slot="{ active }">
        <inertia-link
            :href="href"
            :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'group flex items-center px-4 py-2 text-sm',
            ]"
        >
            <div
                v-if="hasIcon"
                class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
            >
                <slot name="icon"></slot>
            </div>
            <slot name="default"></slot>
        </inertia-link>
    </MenuItem>
    <!-- <div>
        <button
            v-bind="$attrs"
            class="flex items-center w-full px-4 py-2 text-sm text-gray-700 group hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            v-if="as == 'button'"
        >
            <div
                v-if="hasIcon"
                class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
            >
                <slot name="icon"></slot>
            </div>
            <slot></slot>
        </button>

        <inertia-link
            v-bind="$attrs"
            :href="href"
            class="flex items-center w-full px-4 py-2 text-sm text-gray-700 group hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            v-else
        >
            <div
                v-if="hasIcon"
                class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
            >
                <slot name="icon"></slot>
            </div>
            <slot></slot>
        </inertia-link>
    </div> -->
</template>

<script>
import { MenuItem } from "@headlessui/vue";

export default {
    name: "DropdownItem",
    props: ["href", "as"],
    components: { MenuItem },
    computed: {
        hasIcon() {
            return !!this.$slots.icon;
        },
    },
};
</script>
