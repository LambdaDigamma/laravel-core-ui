import ActionPanel from "@/Panels/ActionPanel.vue";

export default {
    component: ActionPanel,
    parameters: {
        backgrounds: {
            default: "gray-100",
        },
    },
    argTypes: {},
};

const Template = (args) => ({
    components: { ActionPanel },
    setup() {
        return { args };
    },
    template: '<ActionPanel v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

export const Fluid = (args) => ({
    components: { ActionPanel },
    setup() {
        return { args };
    },
    template:
        '<ActionPanel v-bind="args"><div class="py-10 bg-gray-100 rounded-lg"></div></ActionPanel>',
});
Fluid.args = {
    fluid: true,
};
