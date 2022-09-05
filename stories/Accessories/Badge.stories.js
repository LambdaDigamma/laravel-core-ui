import Badge from "@/Accessories/Badge.vue";

export default {
    component: Badge,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        // backgroundColor: { control: "color" },
        // onClick: {},
        remove: { control: "toggle" },
        size: {
            control: { type: "select" },
            options: ["sm", "lg"],
        },
        color: {
            control: { type: "select" },
            options: ["gray", "red", "yellow", "green", "blue", "indigo"],
        },
    },
};

const Template = (args) => ({
    components: { Badge },
    setup() {
        return { args };
    },
    template: '<Badge v-bind="args" />',
});

export const Green = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Green.args = {
    text: "Green",
    color: "green",
};
