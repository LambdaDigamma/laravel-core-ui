<template>
    <div
        class="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg dark:border dark:border-dark-700"
    >
        <table class="min-w-full divide-y divide-cool-gray-200 dark:divide-dark-700 dark:bg-dark-700">
            <thead class="bg-gray-100 dark:bg-dark-700 dark:border-dark-700">
                <tr class="border-0">
                    <slot name="head"></slot>
                </tr>
            </thead>

            <tbody class="bg-white divide-y divide-cool-gray-200 dark:divide-dark-700">
                <slot name="body"></slot>
            </tbody>
            <tfoot class="dark:bg-dark-800">
                <tr>
                    <slot name="foot"></slot>
                </tr>
            </tfoot>
        </table>
    </div>
</template>
<script>
export default {
    name: "DataTable"
};
</script>
