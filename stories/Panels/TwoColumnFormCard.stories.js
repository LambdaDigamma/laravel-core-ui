import TwoColumnFormCard from "@/Panels/TwoColumnFormCard.vue";

export default {
    component: TwoColumnFormCard,
    parameters: {
        backgrounds: {
            default: "gray-100",
        },
    },
    argTypes: {},
};

const Template = (args) => ({
    components: { TwoColumnFormCard },
    setup() {
        return { args };
    },
    template: `
        <TwoColumnFormCard v-bind="args">
            <template #title>
                Some Title
            </template>
            <template #description>
               <div class="col-span-6 rounded-lg border-dashed border-gray-500 border-2 h-20 flex flex-col items-center justify-center">
                    <p class="text-gray-500 font-medium text-sm">Description</p>
                </div>
            </template>
            <template #form>
                <div class="col-span-6 rounded-lg border-dashed border-gray-500 border-2 h-40 flex flex-col items-center justify-center">
                    <p class="text-gray-500 font-medium text-sm">Form</p>
                </div>
            </template>
        </TwoColumnFormCard>
        `,
});

export const Default = Template.bind({});
Default.args = {};
