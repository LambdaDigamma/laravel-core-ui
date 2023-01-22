import Badge from '@/Accessories/Badge.vue';

export default {
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // backgroundColor: { control: "color" },
    // onClick: {},
    remove: { control: 'toggle' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'lg'],
    },
    color: {
      control: { type: 'select' },
      options: ['gray', 'red', 'yellow', 'green', 'blue', 'indigo'],
    },
  },
};

export const Green = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: '<Badge v-bind="args" />',
  }),

  args: {
    text: 'Green',
    color: 'green',
  },
};
