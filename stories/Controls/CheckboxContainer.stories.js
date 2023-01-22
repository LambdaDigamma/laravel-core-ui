import CheckboxContainer from '@/Controls/CheckboxContainer.vue';
import { ref } from 'vue';

export default {
  component: CheckboxContainer,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'gray-100',
    },
  },
  argTypes: {},
};

export const Default = {
  render: (args) => ({
    components: { CheckboxContainer },
    setup() {
      const checked = ref(false);

      return { args, checked };
    },
    template: `
            <div class="bg-white p-4 border border-gray-200">
                <CheckboxContainer v-bind="args" v-model="checked">
                    <template #default>
                        Comments
                    </template>
                    <template #description>
                        Get notified when someones posts a comment on a posting.
                    </template>
                </CheckboxContainer>
            </div>
            <div class="bg-white p-4 text-sm border-gray-200 border mt-6">
                <span>{{ checked ? 'Checked' : 'Not checked' }}</span>
            </div>
        `,
  }),

  args: {
    name: 'comments',
  },
};

export const Disabled = {
  render: (args) => ({
    components: { CheckboxContainer },
    setup() {
      const checked = ref(false);

      return { args, checked };
    },
    template: `
            <div class="bg-white p-4 border border-gray-200">
                <CheckboxContainer v-bind="args" v-model="checked">
                    <template #default>
                        Comments
                    </template>
                    <template #description>
                        Get notified when someones posts a comment on a posting.
                    </template>
                </CheckboxContainer>
            </div>
            <div class="bg-white p-4 text-sm border-gray-200 border mt-6">
                <span>{{ checked ? 'Checked' : 'Not checked' }}</span>
            </div>
        `,
  }),

  args: {
    name: 'comments',
    disabled: true,
  },
};

export const Inline = {
  render: (args) => ({
    components: { CheckboxContainer },
    setup() {
      const checked = ref(false);

      return { args, checked };
    },
    template: `
            <div class="bg-white p-4 border border-gray-200">
                <CheckboxContainer v-bind="args" v-model="checked">
                    <template #default>
                        Comments
                    </template>
                    <template #description>
                        Get notified when someones posts a comment on a posting.
                    </template>
                </CheckboxContainer>
            </div>
            <div class="bg-white p-4 text-sm border-gray-200 border mt-6">
                <span>{{ checked ? 'Checked' : 'Not checked' }}</span>
            </div>
        `,
  }),

  args: {
    name: 'comments',
    inline: true,
  },
};

export const InlineDisabled = {
  render: (args) => ({
    components: { CheckboxContainer },
    setup() {
      const checked = ref(false);

      return { args, checked };
    },
    template: `
            <div class="bg-white p-4 border border-gray-200">
                <CheckboxContainer v-bind="args" v-model="checked">
                    <template #default>
                        Comments
                    </template>
                    <template #description>
                        Get notified when someones posts a comment on a posting.
                    </template>
                </CheckboxContainer>
            </div>
            <div class="bg-white p-4 text-sm border-gray-200 border mt-6">
                <span>{{ checked ? 'Checked' : 'Not checked' }}</span>
            </div>
        `,
  }),

  args: {
    name: 'comments',
    inline: true,
    disabled: true,
  },
};
