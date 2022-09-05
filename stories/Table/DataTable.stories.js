import DataTable from "@/Table/DataTable.vue";
import Heading from "@/Table/Heading.vue";

export default {
    component: DataTable,
    parameters: {
        backgrounds: {
            default: "white",
        },
    },
    argTypes: {},
};

const Template = (args) => ({
    components: { DataTable, Heading },
    setup() {
        return { args };
    },
    template: `
        <DataTable v-bind="args">
            <template #head>
                <Heading>ID</Heading>
                <Heading>Name</Heading>
                <Heading>Last update</Heading>
                <Heading />
            </template>
        </DataTable>
        `,
});

export const Default = Template.bind({});
Default.args = {};
