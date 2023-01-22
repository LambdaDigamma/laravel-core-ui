import Toggle from '@/Controls/Toggle.vue';
import { ref } from 'vue';

export default {
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['default', 'short'],
    },
  },
};

export const Default = {
  render: (args) => ({
    components: { Toggle },
    setup() {
      const enabled = ref(false);

      return { args, enabled };
    },
    template: `
            <Toggle v-bind="args" v-model="enabled" />
            <div class="text-gray-900 mt-2 text-center">{{ enabled }}</div>
        `,
  }),

  args: {},
};

export const DefaultDisabled = {
  render: (args) => ({
    components: { Toggle },
    setup() {
      const enabled = ref(false);

      return { args, enabled };
    },
    template: `
            <Toggle v-bind="args" v-model="enabled" />
            <div class="text-gray-900 mt-2 text-center">{{ enabled }}</div>
        `,
  }),

  args: {
    disabled: true,
  },
};

export const Short = {
  render: (args) => ({
    components: { Toggle },
    setup() {
      const enabled = ref(false);

      return { args, enabled };
    },
    template: `
            <Toggle v-bind="args" v-model="enabled" />
            <div class="text-gray-900 mt-2 text-center">{{ enabled }}</div>
        `,
  }),

  args: {
    mode: 'short',
  },
};

export const ShortDisabled = {
  render: (args) => ({
    components: { Toggle },
    setup() {
      const enabled = ref(false);

      return { args, enabled };
    },
    template: `
            <Toggle v-bind="args" v-model="enabled" />
            <div class="text-gray-900 mt-2 text-center">{{ enabled }}</div>
        `,
  }),

  args: {
    mode: 'short',
    disabled: true,
  },
};
