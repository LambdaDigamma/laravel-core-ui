import DropdownHost from '@/Controls/ButtonGroup/DropdownHost.vue';
import DropdownHeader from '@/Controls/Dropdown/DropdownHeader.vue';
import { Menu } from '@headlessui/vue';
import { TrashIcon } from '@heroicons/vue/24/solid';

export default {
  component: DropdownHeader,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'white',
    },
  },
};

export const Default = {
  render: (args) => ({
    components: {
      TrashIcon,
      DropdownHost,
      DropdownHeader,
      Menu,
    },
    setup() {
      return { args };
    },
    template: `
            <Menu class="border border-gray-200 w-60">
                <DropdownHeader>
                    <p class="text-sm">Signed in as</p>
                    <p class="text-sm font-medium text-gray-900 truncate">
                        tom@example.com
                    </p>
                </DropdownHeader>
            </Menu>
        `,
  }),

  args: {},
};
