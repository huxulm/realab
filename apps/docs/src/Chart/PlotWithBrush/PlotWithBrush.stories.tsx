import type { Meta, StoryObj } from "@storybook/react";
import PlotWithBrush from ".";

const meta = {
  title: "Charts/Plot",
  component: PlotWithBrush,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<any>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <PlotWithBrush
        className={
          "flex justify-center items-center bg-blue-200 w-[800px] h-[800px]"
        }
      />
    );
  },
};
