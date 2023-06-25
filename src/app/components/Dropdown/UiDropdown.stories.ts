import { Meta, StoryObj } from "@storybook/react";
import UiDropdown from "./UiDropdown";

const meta: Meta<typeof UiDropdown> = {
  title: "Dropdown",
  component: UiDropdown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof UiDropdown>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    options: ["Opcion 1", "Opcion 2"],
    error: "Error.",
    touched: true,
    floatLabel: true,
  },
};
