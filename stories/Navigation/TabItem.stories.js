import TabItem from "@/Navigation/Tabs/TabItem.vue";
import { CogIcon } from "@heroicons/vue/solid";

export default {
    component: TabItem,
    parameters: {
        layout: "centered",
    },
};

const Template = (args) => ({
    components: { TabItem, CogIcon },
    setup() {
        return { args };
    },
    template:
        '<TabItem v-bind="args"><template #icon><CogIcon /></template>Hallo</TabItem>',
});

export const Default = Template.bind({});
Default.args = {};

export const Active = Template.bind({});
Active.args = {
    active: true,
};
