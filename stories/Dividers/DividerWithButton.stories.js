import DividerWithButton from '@/Dividers/DividerWithButton.vue';
import { PlusSmallIcon } from '@heroicons/vue/24/solid';

export default {
  component: DividerWithButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'white',
    },
  },
  argTypes: {},
};

export const Default = {
  render: (args) => ({
    components: { DividerWithButton, PlusSmallIcon },
    setup() {
      return { args };
    },
    template: `
            <DividerWithButton v-bind="args" class="w-80">
                <template #icon>
                    <PlusSmallIcon />
                </template>
            </DividerWithButton>
        `,
  }),

  args: {
    text: 'Add story',
  },
};
