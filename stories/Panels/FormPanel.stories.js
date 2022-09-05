import FormPanel from "@/Panels/FormPanel.vue";

export default {
    component: FormPanel,
    parameters: {
        backgrounds: {
            default: "gray-100",
        },
    },
    argTypes: {},
};

const Template = (args) => ({
    components: { FormPanel },
    setup() {
        return { args };
    },
    template: '<FormPanel v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
