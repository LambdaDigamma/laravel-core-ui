import BackButton from "@/Navigation/Breadcrumb/BackButton.vue";

export default {
    component: BackButton,
    parameters: {
        layout: "centered",
    },
};

const Template = (args) => ({
    components: { BackButton },
    setup() {
        return { args };
    },
    template: '<BackButton v-bind="args">Hallo</BackButton>',
});

export const Default = Template.bind({});
Default.args = {};
