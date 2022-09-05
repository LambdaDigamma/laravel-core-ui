<template>
    <Menu
        as="span"
        class="relative block"
        :class="{
            '-ml-px': right,
            '-mr-px': left,
        }"
    >
        <MenuButton
            class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            :class="{
                'rounded-r-md': right,
                'rounded-l-md': left,
            }"
        >
            <span class="sr-only">Open options</span>
            <div class="w-5 h-5">
                <slot name="icon"></slot>
            </div>
        </MenuButton>
        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <MenuItems
                class="absolute w-56 mt-2 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                :class="{
                    'origin-top-left left-0': origin == 'leading',
                    'origin-top-right right-0': origin == 'trailing',
                }"
            >
                <slot name="default"> </slot>
            </MenuItems>
        </transition>
    </Menu>
</template>
<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

export default {
    name: "DropdownHost",
    components: {
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
    },
    props: {
        origin: {
            type: String,
            validator: function (value) {
                return ["leading", "trailing"].indexOf(value) !== -1;
            },
            default: () => "trailing",
        },
        left: {
            type: Boolean,
            default: false,
        },
        right: {
            type: Boolean,
            default: false,
        },
        middle: {
            type: Boolean,
            default: true,
        },
    },
};
</script>
