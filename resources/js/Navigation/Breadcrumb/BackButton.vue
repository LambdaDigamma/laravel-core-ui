<template>
    <inertia-link
        :href="href"
        class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
    >
        <svg
            class="flex-shrink-0 w-5 h-5 mr-1 -ml-1 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
            />
        </svg>
        Zurück
    </inertia-link>
</template>
<script>
export default {
    name: "BackButton",
    props: {
        href: {
            type: String,
        }
    }
};
</script>
