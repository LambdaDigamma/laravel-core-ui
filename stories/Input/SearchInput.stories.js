import SearchInput from "@/Input/SearchInput.vue";

export default {
    component: SearchInput,
    argTypes: {},
};

const Template = (args) => ({
    components: { SearchInput },
    setup() {
        return { args };
    },
    template: '<SearchInput v-bind="args"></SearchInput>',
});

export const Default = Template.bind({});
Default.args = {};
