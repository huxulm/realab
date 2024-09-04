import type { Meta, StoryObj } from "@storybook/react";
import PlotWithBrush from ".";

const meta = {
  title: "Charts/PlotWithBrush",
  component: PlotWithBrush,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<any>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        return <PlotWithBrush style={{height: "100vh", width: "100vw"}}/>
    }
};
