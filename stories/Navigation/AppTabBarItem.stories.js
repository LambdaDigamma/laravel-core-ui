import AppTabBarItem from '@/Navigation/AppTabBarItem.vue';
import { CogIcon } from '@heroicons/vue/solid';

export default {
  component: AppTabBarItem,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: (args) => ({
    components: { AppTabBarItem, CogIcon },
    setup() {
      return { args };
    },
    template:
      '<AppTabBarItem v-bind="args"><template #icon><CogIcon /></template><template #label>Settings</template></AppTabBarItem>',
  }),

  args: {},
};

export const Active = {
  render: (args) => ({
    components: { AppTabBarItem, CogIcon },
    setup() {
      return { args };
    },
    template:
      '<AppTabBarItem v-bind="args"><template #icon><CogIcon /></template><template #label>Settings</template></AppTabBarItem>',
  }),

  args: {
    active: true,
  },
};
