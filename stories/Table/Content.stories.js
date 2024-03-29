import DataTable from '@/Table/DataTable.vue';
import Heading from '@/Table/Heading.vue';
import Row from '@/Table/Row.vue';
import Cell from '@/Table/Cell.vue';

export default {
  component: DataTable,
  parameters: {
    backgrounds: {
      default: 'gray-50',
    },
  },
  argTypes: {},
};

export const Default = {
  render: (args) => ({
    components: { DataTable, Heading, Row, Cell },
    setup() {
      return { args };
    },
    template: `
            <DataTable v-bind="args">
                <template #head>
                    <Heading>ID</Heading>
                    <Heading>Name</Heading>
                    <Heading>Email</Heading>
                    <Heading />
                </template>
                <template #body>
                    <Row>
                        <Cell>1</Cell>
                        <Cell>Lennart Fischer</Cell>
                        <Cell>lennart@24doors.app</Cell>
                        <Cell></Cell>
                    </Row>
                    <Row>
                        <Cell>2</Cell>
                        <Cell>Simon Jäschke</Cell>
                        <Cell>simon@24doors.app</Cell>
                        <Cell></Cell>
                    </Row>
                    <Row>
                        <Cell>3</Cell>
                        <Cell>Lou Schulz</Cell>
                        <Cell>simon@24doors.app</Cell>
                        <Cell></Cell>
                    </Row>
                </template>
            </DataTable>
            `,
  }),

  args: {},
};
