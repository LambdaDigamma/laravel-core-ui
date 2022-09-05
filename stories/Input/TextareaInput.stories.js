import TextareaInput from "@/Input/TextareaInput.vue";

export default {
    component: TextareaInput,
    argTypes: {},
};

const Template = (args) => ({
    components: { TextareaInput },
    setup() {
        return { args };
    },
    template: '<TextareaInput v-bind="args"></TextareaInput>',
});

export const Default = Template.bind({});
Default.args = {};

export const Placeholder = Template.bind({});
Placeholder.args = {
    placeholder: "Enter a bio",
};

export const Error = Template.bind({});
Error.args = {
    errors: ["You need to enter something."],
};

export const Longer = Template.bind({});
Longer.args = {
    placeholder: "Enter a bio",
    rows: 10,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: "Message",
};

export const WithHint = Template.bind({});
WithHint.args = {
    hint: "Please keep it short.",
};

export const Optional = Template.bind({});
Optional.args = {
    isOptional: true,
};
