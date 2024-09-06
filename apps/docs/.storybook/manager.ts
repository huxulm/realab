import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'dark',
  brandTitle: 'Huxulm\'s React Lab',
  brandUrl: 'https://github.com/huxulm/realab',
  brandImage: './logo.png',
  brandTarget: '_self',
});

addons.setConfig({
  theme,
});
