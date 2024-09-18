import type { StorybookConfig } from "@storybook-vue/nuxt";

const config: StorybookConfig = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../shared/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook-vue/nuxt",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;
