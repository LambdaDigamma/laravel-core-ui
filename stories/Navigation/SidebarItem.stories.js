import SidebarItem from '@/Navigation/SidebarItem.vue';
import { CogIcon } from '@heroicons/vue/outline';

export default {
  component: SidebarItem,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'white',
    },
  },
};

export const Default = {
  render: (args) => ({
    components: { SidebarItem, CogIcon },
    setup() {
      return { args };
    },
    template: '<SidebarItem class="w-60" v-bind="args" />',
  }),

  args: {
    text: 'Settings',
    icon: CogIcon,
  },
};

export const Active = {
  render: (args) => ({
    components: { SidebarItem, CogIcon },
    setup() {
      return { args };
    },
    template: '<SidebarItem class="w-60" v-bind="args" />',
  }),

  args: {
    text: 'Settings',
    icon: CogIcon,
    active: true,
  },
};
