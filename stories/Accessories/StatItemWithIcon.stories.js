import StatItemWithIcon from '@/Accessories/StatItemWithIcon.vue';
import { UserGroupIcon } from '@heroicons/vue/24/outline';

export default {
  component: StatItemWithIcon,
  argTypes: {
    changeType: {
      // defaultValue: null,
      control: { type: 'select' },
      options: ['increase', 'decrease'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: (args) => ({
    components: { StatItemWithIcon, UserGroupIcon },
    setup() {
      return { args };
    },
    template: `
            <StatItemWithIcon v-bind="args" class="w-80">
                <template #icon><UserGroupIcon /></template>
            </StatItemWithIcon>
        `,
  }),

  args: {
    label: 'Number of users',
    value: '1,400',
  },
};

export const DefaultDisabled = {
  render: (args) => ({
    components: { StatItemWithIcon, UserGroupIcon },
    setup() {
      return { args };
    },
    template: `
            <StatItemWithIcon v-bind="args" class="w-80">
                <template #icon><UserGroupIcon /></template>
            </StatItemWithIcon>
        `,
  }),

  args: {
    label: 'Number of users',
    value: '1,400',
    disabled: true,
  },
};

export const Red = {
  render: (args) => ({
    components: { StatItemWithIcon, UserGroupIcon },
    setup() {
      return { args };
    },
    template: `
            <StatItemWithIcon v-bind="args" class="w-80">
                <template #icon><UserGroupIcon /></template>
            </StatItemWithIcon>
        `,
  }),

  args: {
    label: 'Number of users',
    value: '1,400',
    variant: 'red',
  },
};

export const DefaultWithoutLink = {
  render: (args) => ({
    components: { StatItemWithIcon, UserGroupIcon },
    setup() {
      return { args };
    },
    template: `
            <StatItemWithIcon v-bind="args" class="w-80">
                <template #icon><UserGroupIcon /></template>
            </StatItemWithIcon>
        `,
  }),

  args: {
    label: 'Number of users',
    value: '1,400',
    removeLink: true,
  },
};

export const Inverted = {
  render: (args) => ({
    components: { StatItemWithIcon, UserGroupIcon },
    setup() {
      return { args };
    },
    template: `
            <StatItemWithIcon v-bind="args" class="w-80">
                <template #icon><UserGroupIcon /></template>
            </StatItemWithIcon>
        `,
  }),

  args: {
    label: 'Number of users',
    value: '1,400',
    invertedColors: true,
  },
};

export const InvertedDisabled = {
  render: (args) => ({
    components: { StatItemWithIcon, UserGroupIcon },
    setup() {
      return { args };
    },
    template: `
            <StatItemWithIcon v-bind="args" class="w-80">
                <template #icon><UserGroupIcon /></template>
            </StatItemWithIcon>
        `,
  }),

  args: {
    label: 'Number of users',
    value: '1,400',
    invertedColors: true,
    disabled: true,
  },
};

export const Increase = {
  render: (args) => ({
    components: { StatItemWithIcon, UserGroupIcon },
    setup() {
      return { args };
    },
    template: `
            <StatItemWithIcon v-bind="args" class="w-80">
                <template #icon><UserGroupIcon /></template>
            </StatItemWithIcon>
        `,
  }),

  args: {
    label: 'Number of users',
    value: '1,420',
    changeType: 'increase',
    change: '20',
  },
};

export const Decrease = {
  render: (args) => ({
    components: { StatItemWithIcon, UserGroupIcon },
    setup() {
      return { args };
    },
    template: `
            <StatItemWithIcon v-bind="args" class="w-80">
                <template #icon><UserGroupIcon /></template>
            </StatItemWithIcon>
        `,
  }),

  args: {
    label: 'Number of users',
    value: '1,200',
    changeType: 'decrease',
    change: '220',
  },
};
