import TextInput from "@/Input/TextInput.vue";

export default {
    component: TextInput,
    argTypes: {},
};

const Template = (args) => ({
    components: { TextInput },
    setup() {
        return { args };
    },
    template: '<TextInput v-bind="args"></TextInput>',
});

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
    value: "info@example.org",
    errors: ["This email is already taken."],
};

export const Disabled = Template.bind({});
Disabled.args = {
    placeholder: "Enter a term",
    disabled: true,
};

export const WithHint = Template.bind({});
WithHint.args = {
    label: "Size",
    placeholder: "Your size",
    hint: "Please enter your size in meters.",
};

export const Optional = Template.bind({});
Optional.args = {
    label: "Referrer",
    placeholder: "News, social media,...",
    isOptional: true,
};

export const Number = Template.bind({});
Number.args = {
    label: "Number of trys",
    type: "number",
};
