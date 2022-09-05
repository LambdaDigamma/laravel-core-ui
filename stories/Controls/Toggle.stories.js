import Toggle from "@/Controls/Toggle.vue";
import { ref } from "vue";

export default {
    component: Toggle,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        mode: {
            control: { type: "select" },
            options: ["default", "short"],
        },
    },
};

const Template = (args) => ({
    components: { Toggle },
    setup() {
        const enabled = ref(false);

        return { args, enabled };
    },
    template: `
        <Toggle v-bind="args" v-model="enabled" />
        <div class="text-gray-900 mt-2 text-center">{{ enabled }}</div>
    `,
});

export const Default = Template.bind({});
Default.args = {};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
    disabled: true,
};

export const Short = Template.bind({});
Short.args = {
    mode: "short",
};

export const ShortDisabled = Template.bind({});
ShortDisabled.args = {
    mode: "short",
    disabled: true,
};
