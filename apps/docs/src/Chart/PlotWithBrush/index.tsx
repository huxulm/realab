/* tslint:disable */
import {
  RefObject,
  useRef,
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  ReactElement,
  useCallback,
} from "react";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@vizdev/ui/chart";

import { MotionLine } from "@vizdev/ui/line";

import {
  Bar,
  ComposedChart,
  BarProps,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  BarChart,
} from "recharts";

import {
  scaleBand,
  scaleDiverging,
  scaleIdentity,
  scaleLinear,
  ScaleLinear,
  scaleOrdinal,
  ScaleTime,
  scaleUtc,
} from "d3-scale";
import { extent, map, max } from "d3-array";
import { select } from "d3-selection";
import { axisBottom, axisLeft, axisRight } from "d3-axis";
import { utcMonth } from "d3-time";
import { curveCatmullRom, line } from "d3-shape";
import { SVGProps } from "react";
import { motion } from "framer-motion";
import data from "./data.json";

interface RenderFunction {
  ({
    ref,
  }: {
    ref: RefObject<SVGSVGElement>;
    xScale?: ScaleTime<[Date, Date], number, unknown>;
    yScale?: ScaleLinear<[number, number], number, unknown>;
  }): void;
}

// add react component props type with ref
interface PlotWithBrushProps {
  className?: string;
}

const chartData = [
  { month: "一月", desktop: 186, mobile: 80 },
  { month: "二月", desktop: 305, mobile: 200 },
  { month: "三月", desktop: 237, mobile: 120 },
  { month: "四月", desktop: 73, mobile: 190 },
  { month: "五月", desktop: 209, mobile: 130 },
  { month: "六月", desktop: 214, mobile: 140 },
] satisfies Data[];

interface Data {
  month: string;
  desktop: number;
  mobile: number;
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    theme: {
      light: "hsl(var(--chart-1))",
      dark: "hsl(var(--chart-1))",
    },
  },
  mobile: {
    label: "Mobile",
    theme: {
      light: "hsl(var(--chart-2))",
      dark: "hsl(var(--chart-2))",
    },
  },
} satisfies ChartConfig;

const CustomizedBarShape: (
  props: BarProps
) => ReactElement<SVGProps<SVGPathElement>> = ({
  x,
  y,
  height,
  width,
  fill,
}) => {
  const getPath = (x: number, y: number, width: number, height: number) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
     Z`;

  return (
    <path
      d={getPath(x as number, y as number, width as number, height as number)}
      fill={fill}
      stroke="none"
    />
  );
};

function PlotWithBrushInner(
  { className }: PlotWithBrushProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const txtRef = useRef<HTMLParagraphElement>(null);
  const handleShowClass = () => {
    const cur = (ref as MutableRefObject<HTMLDivElement>).current;
    txtRef.current!.innerHTML = cur.className;
  };

  const interactive = () => (
    <>
      <button
        className="bg-violet-500 hover:bg-violet-300 p-2 border rounded items-center"
        onClick={handleShowClass}
      >
        click show classnames
      </button>
      <p ref={txtRef} className="text-violet-600 word-spacing-3 hidden"></p>
    </>
  );
  const xScale = scaleBand<string>().domain(
    map(chartData, (d) => d.month) as Iterable<string>
  );
  const yScale = scaleLinear().domain(
    extent(chartData, (d) => max([d.mobile, d.desktop])) as Iterable<number>
  );
  console.log(MotionLine);
  return (
    <ChartContainer ref={ref} config={chartConfig} className={className}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid stroke="hsl(var(--foreground))" />
        <XAxis
          dataKey="month"
          tickLine={true}
          tickMargin={10}
          scale={xScale}
          stroke="hsl(var(--foreground))"
        />
        <YAxis tickCount={10} stroke="hsl(var(--foreground))" />
        <Bar
          dataKey="desktop"
          fill="var(--color-desktop)"
          radius={4}
          shape={CustomizedBarShape}
        />
        {/* <Line dataKey={"mobile"} stroke="hsl(var(--chart-2))" /> */}
        <ChartLegend content={<ChartLegendContent />} />
        <MotionLine cx={100} cy={0} r={500} fill="red" />
      </BarChart>
    </ChartContainer>
  );
}

export default forwardRef(PlotWithBrushInner);
