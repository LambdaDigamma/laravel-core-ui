<template>
    <component
        :is="as"
        :href="href"
        :class="[
            active
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
        ]"
    >
        <component
            :is="icon"
            :class="[
                active
                    ? 'text-gray-500'
                    : 'text-gray-400 group-hover:text-gray-500',
                'mr-3 flex-shrink-0 h-6 w-6',
            ]"
            aria-hidden="true"
        />
        {{ text }}
    </component>
</template>
<script>
export default {
    name: "SidebarItem",
    props: {
        as: {
            type: String,
            default: "inertia-link",
        },
        href: {
            type: String,
        },
        active: {
            type: Boolean,
            default: () => false,
        },
        text: {
            type: String,
            required: true,
        },
        icon: Function | Object,
    },

    // computed: {
    //     classes() {
    //         let activeClasses = this.active
    //             ? "text-white bg-true-gray-800 focus:bg-true-gray-700"
    //             : "text-true-gray-300 hover:text-white hover:bg-true-gray-700 focus:text-white focus:bg-true-gray-700";

    //         let collapsedClasses = this.collapsed ? "justify-center" : "";

    //         return activeClasses + " " + collapsedClasses;
    //     },
    //     iconClasses() {
    //         let activeClasses = this.active
    //             ? "text-true-gray-300"
    //             : "text-true-gray-400";
    //         let collapsedClasses = this.collapsed ? "" : "mr-3";

    //         return activeClasses + " " + collapsedClasses;
    //     },
    // },

    methods: {
        resignFocus(event) {
            event.target.blur();
        },
    },
};
</script>
