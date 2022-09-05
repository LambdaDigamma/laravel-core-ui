<template>
    <div
        class="relative flex flex-shrink-0 h-16"
        :class="{ shadow: shadow, 'bg-gray-800': dark, 'bg-white': !dark }"
    >
        <button
            class="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
            aria-label="Navigation öffnen"
            @click="
                showMobileMenu = !showMobileMenu;
                $emit('toggle-menu', showMobileMenu);
            "
        >
            <svg
                class="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                />
            </svg>
        </button>
        <div
            class="flex justify-between flex-1 px-4"
            :class="{ 'bg-gray-800': dark, 'bg-white': !dark }"
        >
            <div class="flex flex-1"></div>
            <div class="flex items-center ml-4 md:ml-6">
                <!-- <button
                    class="p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500"
                    aria-label="Notifications"
                >
                    <svg
                        class="w-6 h-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                    </svg>
                </button> -->

                <ProfileDropdown @logout="logout" />

                <LanguagePicker></LanguagePicker>
            </div>
        </div>
    </div>
</template>
<script>
import JetDropdown from "@/Jetstream/Dropdown";
import JetDropdownLink from "@/Jetstream/DropdownLink";
import ProfileDropdown from "@/Navigation/ProfileDropdown";
import LanguagePicker from "@/Navigation/LanguagePicker";

export default {
    name: "Topbar",
    components: {
        LanguagePicker,
        ProfileDropdown,
        JetDropdown,
        JetDropdownLink,
    },
    props: {
        showingNavigationDropdown: {
            type: Boolean,
        },
        shadow: {
            type: Boolean,
            required: false,
            default: true,
        },
        dark: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    data() {
        return {
            showMobileMenu: false,
        };
    },
    methods: {
        logout() {
            axios.post(route("logout")).then((response) => {
                window.location = "/";
            });
        },
    },
};
</script>
