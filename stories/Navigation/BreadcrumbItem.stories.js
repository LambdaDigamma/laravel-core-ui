import BreadcrumbItem from '@/Navigation/Breadcrumb/BreadcrumbItem.vue';

export default {
  component: BreadcrumbItem,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: (args) => ({
    components: { BreadcrumbItem },
    setup() {
      return { args };
    },
    template: '<ol><BreadcrumbItem v-bind="args">Hallo</BreadcrumbItem></ol>',
  }),

  args: {
    chevron: true,
  },
};
