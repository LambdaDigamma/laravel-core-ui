import DividerWithButton from "@/Dividers/DividerWithButton.vue";
import { PlusSmIcon } from "@heroicons/vue/solid";

export default {
    component: DividerWithButton,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "white",
        },
    },
    argTypes: {},
};

const Template = (args) => ({
    components: { DividerWithButton, PlusSmIcon },
    setup() {
        return { args };
    },
    template: `
        <DividerWithButton v-bind="args" class="w-80">
            <template #icon>
                <PlusSmIcon />
            </template>
        </DividerWithButton>
    `,
});

export const Default = Template.bind({});
Default.args = {
    text: "Add story"
};
