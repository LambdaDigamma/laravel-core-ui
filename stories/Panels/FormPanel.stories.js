import FormPanel from '@/Panels/FormPanel.vue';

export default {
  component: FormPanel,
  parameters: {
    backgrounds: {
      default: 'gray-100',
    },
  },
  argTypes: {},
};

export const Default = {
  render: (args) => ({
    components: { FormPanel },
    setup() {
      return { args };
    },
    template: '<FormPanel v-bind="args" />',
  }),

  args: {},
};
