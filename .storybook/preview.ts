import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark, appBg: 'black' },
      // Override the default light theme
      light: { ...themes.normal, appBg: 'white' }
    },    
    backgrounds: {
      default: 'black',
      values: [
        {
          name: 'black',
          value: '#222',
        },
        {
          name: 'white',
          value: '#eee',
        },
      ],
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
