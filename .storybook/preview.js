import './main.css';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: "gray-100",
        values: [
            {
                name: "white",
                value: "#ffffff",
            },
            {
                name: "gray-50",
                value: "#f9fafb",
            },
            {
                name: "gray-100",
                value: "#f3f4f6",
            },
            {
                name: "gray-200",
                value: "#e5e7eb",
            },
        ],
    },
}
