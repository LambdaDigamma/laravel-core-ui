import InputLabel from '@/Controls/InputGroups/InputLabel.vue';

export default {
  component: InputLabel,
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
    components: { InputLabel },
    setup() {
      return { args };
    },
    template: `
            <div class="w-60">
                <InputLabel v-bind="args" for="full_name">
                    Full name
                </InputLabel>
            </div>
        `,
  }),

  args: {},
};

export const Optional = {
  render: (args) => ({
    components: { InputLabel },
    setup() {
      return { args };
    },
    template: `
            <div class="w-60">
                <InputLabel v-bind="args" for="full_name">
                    Full name
                </InputLabel>
            </div>
        `,
  }),

  args: {
    value: 'Email',
    optional: true,
  },
};
