import InputLabel from "@/Controls/InputGroups/InputLabel.vue";

export default {
    component: InputLabel,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "white",
        },
    },
    argTypes: {},
};

const Template = (args) => ({
    components: { InputLabel },
    setup() {
        return { args };
    },
    template: `
        <div class="w-60">
            <InputLabel v-bind="args" for="full_name">
                Full name
            </InputLabel>
        </div>
    `,
});

export const Default = Template.bind({});
Default.args = {};

export const Optional = Template.bind({});
Optional.args = {
    value: "Email",
    optional: true,
};
