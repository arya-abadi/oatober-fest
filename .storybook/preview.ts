import type { Preview } from '@storybook/nextjs'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
      backgrounds:{
        default: "light",
        values: [
          {
            name: 'light',
            value: '#ffffff'
          },
          {
            name: 'dark',
            value: 'black'
          }
        ],
      }
  },
};

export default preview;