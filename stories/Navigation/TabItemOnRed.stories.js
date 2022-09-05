import TabItem from "@/Navigation/TabItem.vue";
import { CogIcon } from "@heroicons/vue/solid";

export default {
    component: TabItem,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "red",
            values: [{ name: "red", value: "#b91c1c" }],
        },
    },
};

const Template = (args) => ({
    components: { TabItem, CogIcon },
    setup() {
        return { args };
    },
    template:
        '<TabItem v-bind="args"><template #default><CogIcon /></template>Hallo</TabItem>',
});

export const Default = Template.bind({});
Default.args = {
    title: "Settings",
};

export const Active = Template.bind({});
Active.args = {
    title: "Settings",
    active: true,
};
