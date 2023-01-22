import DeleteButtonHandle from '@/Accessories/DeleteButtonHandle.vue';

export default {
  component: DeleteButtonHandle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    side: {
      control: { type: 'select' },
      options: ['leading', 'trailing'],
    },
  },
};

export const Leading = {
  render: (args) => ({
    components: { DeleteButtonHandle },
    setup() {
      return { args };
    },
    template: '<DeleteButtonHandle v-bind="args" />',
  }),

  args: {
    side: 'leading',
  },
};

export const Trailing = {
  render: (args) => ({
    components: { DeleteButtonHandle },
    setup() {
      return { args };
    },
    template: '<DeleteButtonHandle v-bind="args" />',
  }),

  args: {
    side: 'trailing',
  },
};
