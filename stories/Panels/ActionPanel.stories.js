import ActionPanel from '@/Panels/ActionPanel.vue';

export default {
  component: ActionPanel,
  parameters: {
    backgrounds: {
      default: 'gray-100',
    },
  },
  argTypes: {},
};

export const Default = {
  render: (args) => ({
    components: { ActionPanel },
    setup() {
      return { args };
    },
    template: '<ActionPanel v-bind="args" />',
  }),

  args: {},
};

export const Fluid = {
  render: (args) => ({
    components: { ActionPanel },
    setup() {
      return { args };
    },
    template:
      '<ActionPanel v-bind="args"><div class="py-10 bg-gray-100 rounded-lg"></div></ActionPanel>',
  }),

  args: {
    fluid: true,
  },
};
