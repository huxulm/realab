import type { Meta, StoryObj } from "@storybook/react";
import PlotWithBrush from ".";
import { useRef } from "react";

const meta = {
  title: "Charts/Plot",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof PlotWithBrush>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const ref = useRef<HTMLDivElement>(null);
    return (
      <div className="size-full h-screen flex justify-center items-center">
        <PlotWithBrush
          ref={ref}
          className={"size-[600px] rounded-lg shadow-lg p-5 bg-white dark:bg-black"}
        />
      </div>
    );
  },
};
