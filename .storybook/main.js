const path = require("path");

module.exports = {
    "stories": [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],
    "framework": "@storybook/vue3",
    "core": {
        "builder": "@storybook/builder-vite",
        "disableTelemetry": true,
    },
    "features": {
        "storyStoreV7": true
    },
    async viteFinal(config, { configType }) {
        return {
            ...config,
            resolve: {
                alias: [
                    {
                        find: "@",
                        replacement: path.resolve(__dirname, "../resources/js"),
                    },
                    {
                        find: "vue",
                        replacement:
                            "./node_modules/vue/dist/vue.esm-bundler.js",
                    },
                ],
            },
        };
    },
}
