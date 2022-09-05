import ButtonGroup from "@/Controls/ButtonGroup/ButtonGroup.vue";
import DropdownHost from "@/Controls/ButtonGroup/DropdownHost.vue";
import SimpleGroupButton from "@/Controls/ButtonGroup/SimpleGroupButton.vue";
import IconGroupButton from "@/Controls/ButtonGroup/IconGroupButton.vue";
import DropdownItemGroup from "@/Controls/Dropdown/DropdownItemGroup.vue";
import DropdownItem from "@/Controls/Dropdown/DropdownItem.vue";
import DropdownHeader from "@/Controls/Dropdown/DropdownHeader.vue";
import { ChevronDownIcon, TrashIcon } from "@heroicons/vue/solid";
import { ref } from "vue";

export default {
    component: DropdownHost,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        origin: {
            control: "select",
            options: ["leading", "trailing"],
        },
    },
};

const Template = (args) => ({
    components: {
        ButtonGroup,
        IconGroupButton,
        SimpleGroupButton,
        ChevronDownIcon,
        DropdownItemGroup,
        DropdownItem,
        DropdownHeader,
        DropdownHost,
        TrashIcon,
    },
    setup() {
        const show = ref(false);

        return { args, show };
    },
    template: `
        <ButtonGroup>
            <SimpleGroupButton left class="opacity-25">
                Published
            </SimpleGroupButton>

            <DropdownHost right v-bind="args">
                <template #icon>
                    <ChevronDownIcon />
                </template>
                <template #default>
                    <DropdownHeader>
                        <p class="text-sm">Signed in as</p>
                        <p class="text-sm font-medium text-gray-900 truncate">
                            tom@example.com
                        </p>
                    </DropdownHeader>
                    <DropdownItemGroup>
                        <DropdownItem
                            href="#"
                        >
                            Mark as draft
                        </DropdownItem>
                        <DropdownItem href="#">
                            Archive
                        </DropdownItem>
                    </DropdownItemGroup>
                    <DropdownItemGroup>
                        <DropdownItem
                            href="#"
                        >
                            <template #icon>
                                <TrashIcon />
                            </template>
                            Delete
                        </DropdownItem>
                    </DropdownItemGroup>
                </template>
            </DropdownHost>
        </ButtonGroup>
    `,
});

export const Leading = Template.bind({});
Leading.args = {
    origin: "leading",
};

export const Trailing = Template.bind({});
Trailing.args = {
    origin: "trailing",
};
