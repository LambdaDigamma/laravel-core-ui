import SimpleStatItem from '@/Accessories/SimpleStatItem.vue';

export default {
  component: SimpleStatItem,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: (args) => ({
    components: { SimpleStatItem },
    setup() {
      return { args };
    },
    template: `
            <SimpleStatItem v-bind="args">
                <template #label>Number of users</template>
                <template #metric>1,402</template>
            </SimpleStatItem>
        `,
  }),

  args: {},
};
