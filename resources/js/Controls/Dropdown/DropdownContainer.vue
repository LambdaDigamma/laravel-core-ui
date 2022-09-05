<template>
    <div>
        <!-- <div
            v-show="open"
            class="fixed inset-0 z-40"
            @click.capture="$emit('close')"
        ></div> -->
        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <div
                v-show="open"
                class="absolute right-0 z-50 w-56 mt-4 -mr-1 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
            >
                <div
                    class="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="option-menu"
                >
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: "DropdownContainer",
    props: {
        open: {
            type: Boolean,
            default: false
        }
    }
};
</script>
