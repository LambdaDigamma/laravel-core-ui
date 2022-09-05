import Panel from "@/Panels/Panel.vue";

export default {
    component: Panel,
    parameters: {
        backgrounds: {
            default: "gray-100",
        },
    },
    argTypes: {},
};

const Template = (args) => ({
    components: { Panel },
    setup() {
        return { args };
    },
    template:
        '<Panel v-bind="args">Lorem ipsum, some placeholder content.</Panel>',
});

export const Default = Template.bind({});
Default.args = {};
