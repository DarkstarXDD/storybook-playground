// import { inter } from "../src/lib/fonts"

import type { Preview } from "@storybook/nextjs-vite"

import "../src/app/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: "error" },
  },

  // decorators: [
  //   (Story) => (
  //     <div className={`${inter.variable} font-inter`}>
  //       <Story />
  //     </div>
  //   ),
  // ],
}

export default preview
