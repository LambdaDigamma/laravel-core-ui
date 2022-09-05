import TimeInput from "@/Controls/TimeInput.vue";
import { ref } from "vue";

// import { use } from "vue";
// use(VCalendar, {});

export default {
    component: TimeInput,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "white",
        },
    },
    argTypes: {},
};

const Template = (args) => ({
    components: { TimeInput },
    setup() {
        const time = ref(null);

        return { args, time };
    },
    template: `
        <TimeInput v-bind="args" v-model="time" />
        <div class="flex flex-col items-center justify-center mt-4">
            <span>{{ time ? time : 'Not set' }}</span>
        </div>
    `,
});

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};
