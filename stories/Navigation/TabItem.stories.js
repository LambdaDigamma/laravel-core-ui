import TabItem from '@/Navigation/Tabs/TabItem.vue';
import { CogIcon } from '@heroicons/vue/24/solid';

export default {
  component: TabItem,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: (args) => ({
    components: { TabItem, CogIcon },
    setup() {
      return { args };
    },
    template: '<TabItem v-bind="args"><template #icon><CogIcon /></template>Hallo</TabItem>',
  }),

  args: {},
};

export const Active = {
  render: (args) => ({
    components: { TabItem, CogIcon },
    setup() {
      return { args };
    },
    template: '<TabItem v-bind="args"><template #icon><CogIcon /></template>Hallo</TabItem>',
  }),

  args: {
    active: true,
  },
};
