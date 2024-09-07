import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import '../src/global.css';

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      'dark': 'dark',
    },
    defaultTheme: 'light',
  }),
];

const preview: Preview = {
  globalTypes: {
  },  
  parameters: {
    options: {
      storySort: {
        order: ['start', 'QTT 110 设计系统', "QTT 110 设计系统/接收机", "QTT 110 设计系统/主动面", 'utils', 'icons'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
