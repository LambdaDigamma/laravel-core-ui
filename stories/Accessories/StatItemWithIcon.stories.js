import StatItemWithIcon from "@/Accessories/StatItemWithIcon.vue";
import { UserGroupIcon } from "@heroicons/vue/outline";

export default {
    component: StatItemWithIcon,
    argTypes: {
        changeType: {
            // defaultValue: null,
            control: { type: "select" },
            options: ["increase", "decrease"],
        },
    },
    parameters: {
        layout: "centered",
    },
};

const Template = (args) => ({
    components: { StatItemWithIcon, UserGroupIcon },
    setup() {
        return { args };
    },
    template: `
        <StatItemWithIcon v-bind="args" class="w-80">
            <template #icon><UserGroupIcon /></template>
        </StatItemWithIcon>
    `,
});

export const Default = Template.bind({});
Default.args = {
    label: "Number of users",
    value: "1,400",
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
    label: "Number of users",
    value: "1,400",
    disabled: true,
};

export const Red = Template.bind({});
Red.args = {
    label: "Number of users",
    value: "1,400",
    variant: "red",
};

export const DefaultWithoutLink = Template.bind({});
DefaultWithoutLink.args = {
    label: "Number of users",
    value: "1,400",
    removeLink: true,
};

export const Inverted = Template.bind({});
Inverted.args = {
    label: "Number of users",
    value: "1,400",
    invertedColors: true,
};

export const InvertedDisabled = Template.bind({});
InvertedDisabled.args = {
    label: "Number of users",
    value: "1,400",
    invertedColors: true,
    disabled: true,
};

export const Increase = Template.bind({});
Increase.args = {
    label: "Number of users",
    value: "1,420",
    changeType: "increase",
    change: "20",
};

export const Decrease = Template.bind({});
Decrease.args = {
    label: "Number of users",
    value: "1,200",
    changeType: "decrease",
    change: "220",
};
