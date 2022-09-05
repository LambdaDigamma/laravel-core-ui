import DropdownHost from "@/Controls/ButtonGroup/DropdownHost.vue";
import DropdownItem from "@/Controls/Dropdown/DropdownItem.vue";
import { Menu } from "@headlessui/vue";
import { TrashIcon } from "@heroicons/vue/solid";

export default {
    component: DropdownItem,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "white",
        },
    },
};

const Template = (args) => ({
    components: {
        TrashIcon,
        DropdownItem,
        DropdownHost,
        Menu,
    },
    setup() {
        return { args };
    },
    template: `
        <Menu class="border border-gray-200 w-60">
            <DropdownItem
                href="#"
            >
                Mark as draft
            </DropdownItem>
        </Menu>
    `,
});

export const Default = Template.bind({});
Default.args = {};

export const WithIcon = (args) => ({
    components: {
        TrashIcon,
        DropdownItem,
        DropdownHost,
        Menu,
    },
    setup() {
        return { args };
    },
    template: `
        <Menu class="border border-gray-200 w-60">
            <DropdownItem
                href="#"
            >
                <template #icon>
                    <TrashIcon />
                </template>
                Delete
            </DropdownItem>
        </Menu>
    `,
});
