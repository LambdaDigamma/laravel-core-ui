import TextInput from '@/Input/TextInput.vue';

export default {
  component: TextInput,
  argTypes: {},
};

export const Default = {
  render: (args) => ({
    components: { TextInput },
    setup() {
      return { args };
    },
    template: '<TextInput v-bind="args"></TextInput>',
  }),

  args: {},
};

export const Error = {
  render: (args) => ({
    components: { TextInput },
    setup() {
      return { args };
    },
    template: '<TextInput v-bind="args"></TextInput>',
  }),

  args: {
    value: 'info@example.org',
    errors: ['This email is already taken.'],
  },
};

export const Disabled = {
  render: (args) => ({
    components: { TextInput },
    setup() {
      return { args };
    },
    template: '<TextInput v-bind="args"></TextInput>',
  }),

  args: {
    placeholder: 'Enter a term',
    disabled: true,
  },
};

export const WithHint = {
  render: (args) => ({
    components: { TextInput },
    setup() {
      return { args };
    },
    template: '<TextInput v-bind="args"></TextInput>',
  }),

  args: {
    label: 'Size',
    placeholder: 'Your size',
    hint: 'Please enter your size in meters.',
  },
};

export const Optional = {
  render: (args) => ({
    components: { TextInput },
    setup() {
      return { args };
    },
    template: '<TextInput v-bind="args"></TextInput>',
  }),

  args: {
    label: 'Referrer',
    placeholder: 'News, social media,...',
    isOptional: true,
  },
};

export const Number = {
  render: (args) => ({
    components: { TextInput },
    setup() {
      return { args };
    },
    template: '<TextInput v-bind="args"></TextInput>',
  }),

  args: {
    label: 'Number of trys',
    type: 'number',
  },
};
