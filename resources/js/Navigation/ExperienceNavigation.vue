<template>
    <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
            class="flex items-center justify-between py-6 md:justify-start md:space-x-10"
        >
            <div class="lg:w-0 lg:flex-1">
                <a href="#" class="inline-flex items-center space-x-2">
                    <img
                        class="w-auto h-8 sm:h-12"
                        :src="menuLogo"
                        alt="24doors Logo"
                    />
                    <span class="mt-1.5 font-semibold text-2xl"> 24doors </span>
                </a>
            </div>
            <div class="-my-2 -mr-2 md:hidden">
                <button
                    type="button"
                    class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                >
                    <!-- Heroicon name: menu -->
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
            <nav class="hidden space-x-10 md:flex">
                <a
                    href="#"
                    class="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                >
                    Meine Kalender
                </a>

                <a
                    href="#"
                    class="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                >
                    Shop
                </a>
                <a
                    href="#"
                    class="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                >
                    Verschenken
                </a>

                <div class="relative">
                    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                    <button
                        type="button"
                        class="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out group hover:text-gray-900 focus:outline-none focus:text-gray-900"
                    >
                        <span>Mehr</span>
                        <!--
            Heroicon name: chevron-down

            Item active: "text-gray-600", Item inactive: "text-gray-400"
          -->
                        <svg
                            class="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                    <!--
          'More' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"
        -->
                    <div
                        v-show="showMore"
                        class="absolute w-screen max-w-xs px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
                    >
                        <div class="rounded-lg shadow-lg">
                            <div
                                class="overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5"
                            >
                                <div
                                    class="relative z-20 grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8"
                                >
                                    <a
                                        href="#"
                                        class="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                                    >
                                        <p
                                            class="text-base font-medium leading-6 text-gray-900"
                                        >
                                            Blog
                                        </p>
                                        <p
                                            class="text-sm leading-5 text-gray-500"
                                        >
                                            Learn about tips, product updates
                                            and company culture.
                                        </p>
                                    </a>
                                    <a
                                        href="#"
                                        class="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                                    >
                                        <p
                                            class="text-base font-medium leading-6 text-gray-900"
                                        >
                                            Help Center
                                        </p>
                                        <p
                                            class="text-sm leading-5 text-gray-500"
                                        >
                                            Get all of your questions answered
                                            in our forums of contact support.
                                        </p>
                                    </a>
                                    <a
                                        href="#"
                                        class="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                                    >
                                        <p
                                            class="text-base font-medium leading-6 text-gray-900"
                                        >
                                            Guides
                                        </p>
                                        <p
                                            class="text-sm leading-5 text-gray-500"
                                        >
                                            Learn how to maximize our platform
                                            to get the most out of it.
                                        </p>
                                    </a>
                                    <a
                                        href="#"
                                        class="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                                    >
                                        <p
                                            class="text-base font-medium leading-6 text-gray-900"
                                        >
                                            Events
                                        </p>
                                        <p
                                            class="text-sm leading-5 text-gray-500"
                                        >
                                            Check out webinars with experts and
                                            learn about our annual conference.
                                        </p>
                                    </a>
                                    <a
                                        href="#"
                                        class="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                                    >
                                        <p
                                            class="text-base font-medium leading-6 text-gray-900"
                                        >
                                            Security
                                        </p>
                                        <p
                                            class="text-sm leading-5 text-gray-500"
                                        >
                                            Understand how we take your privacy
                                            seriously.
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div
                class="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0"
            >
                <button
                    class="p-1 text-gray-400 transition duration-150 ease-in-out border-2 border-transparent rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100"
                    aria-label="Notifications"
                >
                    <svg
                        class="w-8 h-8"
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
                </button>
                <div class="relative ml-3">
                    <div>
                        <button
                            class="flex text-sm transition duration-150 ease-in-out border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"
                            id="user-menu"
                            aria-label="User menu"
                            aria-haspopup="true"
                        >
                            <img
                                @click="
                                    showProfileDropdown = !showProfileDropdown
                                "
                                class="w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </button>
                    </div>
                    <transition
                        enter-active-class="transition duration-200 ease-out"
                        enter-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0"
                    >
                        <div
                            v-show="showProfileDropdown"
                            class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg"
                        >
                            <div
                                class="py-1 bg-white rounded-md ring-1 ring-black ring-opacity-5"
                            >
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                >
                                    Mein Profil
                                </a>

                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                >
                                    Einstellungen
                                </a>

                                <inertia-link
                                    :href="route('logout')"
                                    method="post"
                                    class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                >
                                    Abmelden
                                </inertia-link>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
            <div class="flex items-center -mr-2 sm:hidden">
                <!-- Mobile menu button -->
                <button
                    class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                >
                    <!-- Menu open: "hidden", Menu closed: "block" -->
                    <svg
                        class="block w-6 h-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    <!-- Menu open: "block", Menu closed: "hidden" -->
                    <svg
                        class="hidden w-6 h-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>

        <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
        <div
            class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
        >
            <div class="rounded-lg shadow-lg">
                <div
                    class="bg-white divide-y-2 rounded-lg ring-1 ring-black ring-opacity-5 divide-gray-50"
                >
                    <div class="px-5 pt-5 pb-6 space-y-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <img class="w-auto h-8" alt="Workflow" />
                            </div>
                            <div class="-mr-2">
                                <button
                                    type="button"
                                    class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                                >
                                    <!-- Heroicon name: x -->
                                    <svg
                                        class="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <nav class="grid grid-cols-1 gap-7">
                                <a
                                    href="#"
                                    class="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                                >
                                    <div
                                        class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md"
                                    >
                                        <!-- Heroicon name: chart-bar -->
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        class="text-base font-medium leading-6 text-gray-900"
                                    >
                                        Analytics
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    class="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                                >
                                    <div
                                        class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md"
                                    >
                                        <!-- Heroicon name: cursor-click -->
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        class="text-base font-medium leading-6 text-gray-900"
                                    >
                                        Engagement
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    class="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                                >
                                    <div
                                        class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md"
                                    >
                                        <!-- Heroicon name: shield-check -->
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        class="text-base font-medium leading-6 text-gray-900"
                                    >
                                        Security
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    class="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                                >
                                    <div
                                        class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md"
                                    >
                                        <!-- Heroicon name: view-grid -->
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        class="text-base font-medium leading-6 text-gray-900"
                                    >
                                        Integrations
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    class="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                                >
                                    <div
                                        class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md"
                                    >
                                        <!-- Heroicon name: refresh -->
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        class="text-base font-medium leading-6 text-gray-900"
                                    >
                                        Automations
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    class="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                                >
                                    <div
                                        class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md"
                                    >
                                        <!-- Heroicon name: document-report -->
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        class="text-base font-medium leading-6 text-gray-900"
                                    >
                                        Reports
                                    </div>
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div class="px-5 py-6 space-y-6">
                        <div class="grid grid-cols-2 gap-4">
                            <a
                                href="#"
                                class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                            >
                                Pricing
                            </a>
                            <a
                                href="#"
                                class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                            >
                                Docs
                            </a>
                            <a
                                href="#"
                                class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                            >
                                Enterprise
                            </a>
                            <a
                                href="#"
                                class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                            >
                                Blog
                            </a>
                            <a
                                href="#"
                                class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                            >
                                Help Center
                            </a>
                            <a
                                href="#"
                                class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                            >
                                Guides
                            </a>
                            <a
                                href="#"
                                class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                            >
                                Security
                            </a>
                            <a
                                href="#"
                                class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                            >
                                Events
                            </a>
                        </div>
                        <div class="space-y-6">
                            <span class="flex w-full rounded-md shadow-sm">
                                <a
                                    href="#"
                                    class="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:ring-indigo active:bg-indigo-700"
                                >
                                    Sign up
                                </a>
                            </span>
                            <p
                                class="text-base font-medium leading-6 text-center text-gray-500"
                            >
                                Existing customer?
                                <a
                                    href="#"
                                    class="text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500"
                                >
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import menuLogo from "~/menu-logo.svg";
export default {
    name: "ExperienceNavigation",
    components: {},
    props: {},
    data() {
        return {
            showMore: false,
            showProfileDropdown: false,
            menuLogo,
        };
    },
    methods: {},
};
</script>

<style scoped></style>
