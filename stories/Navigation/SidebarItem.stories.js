import SidebarItem from "@/Navigation/SidebarItem.vue";
import { CogIcon } from "@heroicons/vue/outline";

export default {
    component: SidebarItem,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "white",
        },
    },
};

const Template = (args) => ({
    components: { SidebarItem, CogIcon },
    setup() {
        return { args };
    },
    template: '<SidebarItem class="w-60" v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    text: "Settings",
    icon: CogIcon,
};

export const Active = Template.bind({});
Active.args = {
    text: "Settings",
    icon: CogIcon,
    active: true,
};

// export const Active = Template.bind({});
// Active.args = {
//     active: true,
// };
