import FlashNotification from '@/Accessories/FlashNotification.vue';

export default {
  component: FlashNotification,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // backgroundColor: { control: "color" },
    // onClick: {},
    // remove: { control: "toggle" },
    // size: {
    //     control: { type: "select" },
    //     options: ["sm", "lg"],
    // },
    // color: {
    //     control: { type: "select" },
    //     options: ["gray", "red", "yellow", "green", "blue", "indigo"],
    // },
  },
};

export const Default = {
  render: (args) => ({
    components: { FlashNotification },
    setup() {
      return { args };
    },
    // template: '<FlashNotification v-bind="args" />',
    template: '<p>ToDo</p>',
  }),

  args: {
    text: 'Green',
    color: 'green',
  },
};
