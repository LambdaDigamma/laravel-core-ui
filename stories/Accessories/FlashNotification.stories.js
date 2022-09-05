import FlashNotification from "@/Accessories/FlashNotification.vue";

export default {
    component: FlashNotification,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        // backgroundColor: { control: "color" },
        // onClick: {},
        // remove: { control: "toggle" },
        // size: {
        //     control: { type: "select" },
        //     options: ["sm", "lg"],
        // },
        // color: {
        //     control: { type: "select" },
        //     options: ["gray", "red", "yellow", "green", "blue", "indigo"],
        // },
    },
};

const Template = (args) => ({
    components: { FlashNotification },
    setup() {
        return { args };
    },
    // template: '<FlashNotification v-bind="args" />',
    template: "<p>ToDo</p>",
});

export const Default = Template.bind({});
Default.args = {
    text: "Green",
    color: "green",
};
