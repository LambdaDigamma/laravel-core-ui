import PaginationButtonGroup from "@/Navigation/PaginationButtonGroup.vue";
import { CogIcon } from "@heroicons/vue/solid";

export default {
    component: PaginationButtonGroup,
    parameters: {
        layout: "centered",
    },
};

const resource = {
    "current_page": 18,
    "first_page_url":"#",
    "from":171,
    "last_page":22,
    "last_page_url":"#",
    "links":[
        {
            "url": "#",
            "label": "&laquo; Zur\u00fcck",
            "active":false
        },
        {
            "url":"#",
            "label":"1",
            "active":false
        },
        {
            "url":"#",
            "label":"2",
            "active":false
        },
        {
            "url":null,
            "label":"...",
            "active":false
        },
        {
            "url":"#",
            "label":"13",
            "active":false
        },
        {
            "url":"#",
            "label":"14",
            "active":false
        },
        {
            "url":"#",
            "label":"15",
            "active":false
        },
        {
            "url":"#",
            "label":"16",
            "active":false
        },
        {
            "url":"#",
            "label":"17",
            "active":false
        },
        {
            "url":"#",
            "label":"18",
            "active":true
        },
        {
            "url":"#",
            "label":"19",
            "active":false
        },
        {
            "url":"#",
            "label":"20",
            "active":false
        },
        {
            "url":"#",
            "label":"21",
            "active":false
        },
        {
            "url":"#",
            "label":"22",
            "active":false
        },
        {
            "url":"#",
            "label":"Weiter &raquo;",
            "active":false
        }
    ],
    "next_page_url":"#",
    "path":"#",
    "per_page":10,
    "prev_page_url":"#",
    "to":180,
    "total":213
}

const Template = (args) => ({
    components: { PaginationButtonGroup, CogIcon },
    setup() {
        return { args, resource };
    },
    template:
        '<PaginationButtonGroup :resource="resource" v-bind="args"></PaginationButtonGroup>',
});

export const Default = Template.bind({});
Default.args = {};

