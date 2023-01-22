import DragHandle from '@/Accessories/DragHandle.vue';

export default {
  component: DragHandle,
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
    components: { DragHandle },
    setup() {
      return { args };
    },
    template: '<DragHandle v-bind="args" />',
  }),

  args: {},
};

export const Trailing = {
  render: (args) => ({
    components: { DragHandle },
    setup() {
      return { args };
    },
    template: '<DragHandle v-bind="args" />',
  }),

  args: {
    side: 'trailing',
  },
};
