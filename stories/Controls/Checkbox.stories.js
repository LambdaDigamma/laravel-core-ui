import Checkbox from "@/Controls/Checkbox.vue";
import { ref } from "vue";

export default {
    component: Checkbox,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "white",
        },
    },
    argTypes: {},
};

const Template = (args) => ({
    components: { Checkbox },
    setup() {
        const checked = ref(false);

        return { args, checked };
    },
    template: `
        <div class="flex flex-col items-center justify-center space-y-3">
            <Checkbox v-bind="args" v-model="checked" id="abc" />
            <span>{{ checked ? 'Checked' : 'Not checked' }}</span>
        </div>
    `,
});

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};
