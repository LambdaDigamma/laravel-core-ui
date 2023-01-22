import SearchInput from '@/Input/SearchInput.vue';

export default {
  component: SearchInput,
  argTypes: {},
};

export const Default = {
  render: (args) => ({
    components: { SearchInput },
    setup() {
      return { args };
    },
    template: '<SearchInput v-bind="args"></SearchInput>',
  }),

  args: {},
};
