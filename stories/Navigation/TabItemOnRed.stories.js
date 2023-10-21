import TabItem from '@/Navigation/TabItem.vue';
import { CogIcon } from '@heroicons/vue/24/solid';

export default {
  component: TabItem,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'red',
      values: [{ name: 'red', value: '#b91c1c' }],
    },
  },
};

export const Default = {
  render: (args) => ({
    components: { TabItem, CogIcon },
    setup() {
      return { args };
    },
    template: '<TabItem v-bind="args"><template #default><CogIcon /></template>Hallo</TabItem>',
  }),

  args: {
    title: 'Settings',
  },
};

export const Active = {
  render: (args) => ({
    components: { TabItem, CogIcon },
    setup() {
      return { args };
    },
    template: '<TabItem v-bind="args"><template #default><CogIcon /></template>Hallo</TabItem>',
  }),

  args: {
    title: 'Settings',
    active: true,
  },
};
