import SectionBorder from "@/Accessories/SectionBorder.vue";

export default {
    component: SectionBorder,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "white"
        }
    },
};

const Template = (args) => ({
    components: { SectionBorder },
    setup() {
        return { args };
    },
    template: '<SectionBorder class="w-60" v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
