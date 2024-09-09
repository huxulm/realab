// add storybook story
import { Meta, StoryObj } from "@storybook/react";
import clsx from "clsx";

const meta = {
  title: "Tailwind CSS",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

const Label: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "mt-8 mb-4",
}) => <h1 className={clsx("tw-demo-label", className)}>{children}</h1>;

export const Default: StoryObj = {
  args: {},
  render: () => {
    return (
      <div className="w-screen h-screen bg-white p-5">
        <Label className="mt-0">Using utility</Label>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0">
            <img
              className="size-12"
              src="/images/logo.svg"
              alt="ChitChat Logo"
            />
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-slate-500">You have a new message!</p>
          </div>
        </div>
        <Label>Fully responsive</Label>
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <img
            className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
            src="https://tailwindcss.com/img/erin-lindford.jpg"
            alt="Woman's Face"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg text-black font-semibold">Erin Lindford</p>
              <p className="text-slate-500 font-medium">Product Engineer</p>
            </div>
            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Message
            </button>
          </div>
        </div>
        <Label>Hover, focus and active</Label>
        <button className="text-center py-2 px-8 mx-auto max-w-full w-full rounded-xl shadow-lg space-y-2 flex items-center justify-center sm:py-4 sm:space-y-0 sm:space-x-0 sm:max-w-sm bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          Save changes
        </button>
        <Label>Responsive Design</Label>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48 md:h-full"
                src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
                alt="Modern building architecture"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Company retreats
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline decoration-pink-500"
              >
                Incredible accommodation for your team
              </a>
              <p className="mt-2 text-slate-500">
                Looking to take your team away on a retreat to enjoy awesome
                food and take in some sunshine? We have a list of places to do
                just that.
              </p>
            </div>
          </div>
        </div>
        <Label>Dark mode</Label>
        <div className="flex flex-wrap gap-5 p-5 md:gap-0 md:justify-around">
          <div className="bg-white md:max-w-sm max-w-full dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            <div>
              <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                ></svg>
              </span>
            </div>
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
              Writes Upside-Down
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation,
              including upside-down. It even works in outer space.
            </p>
          </div>
          <div className="dark">
            <div className="bg-white md:max-w-sm max-w-full dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
              <div>
                <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  ></svg>
                </span>
              </div>
              <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                Writes Upside-Down
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                The Zero Gravity Pen can be used to write in any orientation,
                including upside-down. It even works in outer space.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
