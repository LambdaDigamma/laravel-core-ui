import DragHandle from "@/Accessories/DragHandle.vue";

export default {
    component: DragHandle,
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
    components: { DragHandle },
    setup() {
        return { args };
    },
    template: '<DragHandle v-bind="args" />',
});

export const Leading = Template.bind({});
Leading.args = {};

export const Trailing = Template.bind({});
Trailing.args = {
    side: "trailing",
};
