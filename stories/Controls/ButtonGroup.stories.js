import ButtonGroup from "@/Controls/ButtonGroup/ButtonGroup.vue";
import SimpleGroupButton from "@/Controls/ButtonGroup/SimpleGroupButton.vue";
import IconGroupButton from "@/Controls/ButtonGroup/IconGroupButton.vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

export default {
    component: SimpleGroupButton,
    parameters: {
        layout: "centered",
    },
};

const Template = (args) => ({
    components: {
        ButtonGroup,
        IconGroupButton,
        SimpleGroupButton,
        ChevronDownIcon,
    },
    setup() {
        return { args };
    },
    template: `
        <ButtonGroup>
            <SimpleGroupButton left>
                Day
            </SimpleGroupButton>
            <SimpleGroupButton middle>
                Month
            </SimpleGroupButton>
            <SimpleGroupButton right>
                Year
            </SimpleGroupButton>
        </ButtonGroup>
    `,
});

export const Default = Template.bind({});
Default.args = {};
