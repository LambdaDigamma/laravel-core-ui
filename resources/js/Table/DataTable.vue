<template>
    <div
        class="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg"
    >
        <table class="min-w-full divide-y divide-cool-gray-200">
            <thead class="bg-gray-100">
                <tr>
                    <slot name="head"></slot>
                </tr>
            </thead>

            <tbody class="bg-white divide-y divide-cool-gray-200">
                <slot name="body"></slot>
            </tbody>
            <tfoot>
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
