import CheckboxContainer from "@/Controls/CheckboxContainer.vue";
import { ref } from "vue";

export default {
    component: CheckboxContainer,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "gray-100",
        },
    },
    argTypes: {},
};

const Template = (args) => ({
    components: { CheckboxContainer },
    setup() {
        const checked = ref(false);

        return { args, checked };
    },
    template: `
        <div class="bg-white p-4 border border-gray-200">
            <CheckboxContainer v-bind="args" v-model="checked">
                <template #label>
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
});

export const Default = Template.bind({});
Default.args = {
    name: "comments",
};

export const Disabled = Template.bind({});
Disabled.args = {
    name: "comments",
    disabled: true,
};

export const Inline = Template.bind({});
Inline.args = {
    name: "comments",
    inline: true,
};

export const InlineDisabled = Template.bind({});
InlineDisabled.args = {
    name: "comments",
    inline: true,
    disabled: true,
};
