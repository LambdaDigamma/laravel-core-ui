import TextareaInput from '@/Input/TextareaInput.vue';

export default {
  component: TextareaInput,
  argTypes: {},
};

export const Default = {
  render: (args) => ({
    components: { TextareaInput },
    setup() {
      return { args };
    },
    template: '<TextareaInput v-bind="args"></TextareaInput>',
  }),

  args: {},
};

export const Placeholder = {
  render: (args) => ({
    components: { TextareaInput },
    setup() {
      return { args };
    },
    template: '<TextareaInput v-bind="args"></TextareaInput>',
  }),

  args: {
    placeholder: 'Enter a bio',
  },
};

export const Error = {
  render: (args) => ({
    components: { TextareaInput },
    setup() {
      return { args };
    },
    template: '<TextareaInput v-bind="args"></TextareaInput>',
  }),

  args: {
    errors: ['You need to enter something.'],
  },
};

export const Longer = {
  render: (args) => ({
    components: { TextareaInput },
    setup() {
      return { args };
    },
    template: '<TextareaInput v-bind="args"></TextareaInput>',
  }),

  args: {
    placeholder: 'Enter a bio',
    rows: 10,
  },
};

export const WithLabel = {
  render: (args) => ({
    components: { TextareaInput },
    setup() {
      return { args };
    },
    template: '<TextareaInput v-bind="args"></TextareaInput>',
  }),

  args: {
    label: 'Message',
  },
};

export const WithHint = {
  render: (args) => ({
    components: { TextareaInput },
    setup() {
      return { args };
    },
    template: '<TextareaInput v-bind="args"></TextareaInput>',
  }),

  args: {
    hint: 'Please keep it short.',
  },
};

export const Optional = {
  render: (args) => ({
    components: { TextareaInput },
    setup() {
      return { args };
    },
    template: '<TextareaInput v-bind="args"></TextareaInput>',
  }),

  args: {
    isOptional: true,
  },
};
