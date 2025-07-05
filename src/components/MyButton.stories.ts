import { fn } from "storybook/test"

import MyButton from "@/components/MyButton"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

const meta = {
  component: MyButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      options: {
        dark: { name: "Dark", value: "#27272a" },
      },
    },
  },
  args: {
    onPress: fn(),
  },
  argTypes: {
    label: {
      control: { type: "text" }, // This is not needed for this example, since this is the default
    },
  },
} satisfies Meta<typeof MyButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: "Submit Me",
  },
}
