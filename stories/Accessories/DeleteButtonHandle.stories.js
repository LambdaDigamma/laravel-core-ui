import DeleteButtonHandle from "@/Accessories/DeleteButtonHandle.vue";

export default {
    component: DeleteButtonHandle,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        side: {
            control: { type: "select" },
            options: ["leading", "trailing"],
        },
    },
};

const Template = (args) => ({
    components: { DeleteButtonHandle },
    setup() {
        return { args };
    },
    template: '<DeleteButtonHandle v-bind="args" />',
});

export const Leading = Template.bind({});
Leading.args = {
    side: "leading",
};

export const Trailing = Template.bind({});
Trailing.args = {
    side: "trailing",
};
