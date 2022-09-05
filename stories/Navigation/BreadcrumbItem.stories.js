import BreadcrumbItem from "@/Navigation/Breadcrumb/BreadcrumbItem.vue";

export default {
    component: BreadcrumbItem,
    parameters: {
        layout: "centered",
    },
};

const Template = (args) => ({
    components: { BreadcrumbItem },
    setup() {
        return { args };
    },
    template: '<ol><BreadcrumbItem v-bind="args">Hallo</BreadcrumbItem></ol>',
});

export const Default = Template.bind({});
Default.args = {
    chevron: true,
};
