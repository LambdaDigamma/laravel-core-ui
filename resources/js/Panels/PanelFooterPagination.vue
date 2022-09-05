<template>
    <div class="px-4 py-3 border-t border-gray-200 sm:px-6 sm:py-3">
        <Pagination :links="links"></Pagination>
    </div>
</template>

<script>
import Pagination from "../Navigation/Pagination.vue";
export default {
    name: "PanelFooterPagination",
    components: { Pagination },
    props: {
        links: Array,
    },
};
</script>

<style scoped></style>
