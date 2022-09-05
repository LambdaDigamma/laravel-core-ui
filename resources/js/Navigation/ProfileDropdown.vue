<template>
    <div class="flex items-center ml-3">
        <div class="relative ml-3">
            <jet-dropdown align="right" width="48">
                <template #trigger>
                    <button
                        v-if="$page.props.jetstream.managesProfilePhotos"
                        class="flex text-sm transition duration-150 ease-in-out border-2 border-transparent rounded-full  focus:outline-none focus:border-gray-300"
                    >
                        <img
                            class="object-cover w-8 h-8 rounded-full"
                            :src="$page.props.user.profile_photo_url"
                            :alt="$page.props.user.name"
                        />
                    </button>

                    <button
                        v-else
                        class="flex items-center text-sm font-medium text-gray-500 transition duration-150 ease-in-out  hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                    >
                        <div>{{ $page.props.user.name }}</div>

                        <div class="ml-1">
                            <svg
                                class="w-4 h-4 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                    </button>
                </template>

                <template #content>
                    <!-- Account Management -->
                    <div class="block px-4 py-2 text-xs text-gray-400">
                        Verwalten
                    </div>

                    <div>
                        <a
                            :href="route('profile.show')"
                            class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out  hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                        >
                            Konto
                        </a>
                    </div>

                    <div class="border-t border-gray-100"></div>
                    <!-- Authentication -->
                    <form @submit.prevent="$emit('logout')">
                        <jet-dropdown-link as="button">
                            Abmelden
                        </jet-dropdown-link>
                    </form>
                </template>
            </jet-dropdown>
        </div>
    </div>
</template>
<script>
import JetDropdown from "@/Jetstream/Dropdown";
import JetDropdownLink from "@/Jetstream/DropdownLink";

export default {
    name: "ProfileDropdown",
    components: { JetDropdown, JetDropdownLink },
};
</script>
