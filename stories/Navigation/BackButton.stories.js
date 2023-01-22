import BackButton from '@/Navigation/Breadcrumb/BackButton.vue';

export default {
  component: BackButton,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: (args) => ({
    components: { BackButton },
    setup() {
      return { args };
    },
    template: '<BackButton v-bind="args">Hallo</BackButton>',
  }),

  args: {},
};
