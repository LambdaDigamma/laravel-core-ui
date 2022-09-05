import AppTabBarItem from "@/Navigation/AppTabBarItem.vue";
import { CogIcon } from "@heroicons/vue/solid";

export default {
    component: AppTabBarItem,
    parameters: {
        layout: "centered",
    },
};

const Template = (args) => ({
    components: { AppTabBarItem, CogIcon },
    setup() {
        return { args };
    },
    template:
        '<AppTabBarItem v-bind="args"><template #icon><CogIcon /></template><template #label>Settings</template></AppTabBarItem>',
});

export const Default = Template.bind({});
Default.args = {};

export const Active = Template.bind({});
Active.args = {
    active: true,
};
