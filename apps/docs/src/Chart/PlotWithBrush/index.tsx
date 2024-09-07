/* tslint:disable */
import React, { RefObject, useEffect, useRef } from "react";
import { useParentSize } from "@visx/responsive";

import data from "./data.json";
import { scaleLinear, ScaleLinear, ScaleTime, scaleUtc } from "d3-scale";
import { extent } from "d3-array";
import { select } from "d3-selection";
import { axisBottom, axisLeft, axisRight } from "d3-axis";
import { utcMonth } from "d3-time";
import { curveCatmullRom, line } from "d3-shape";

interface Data {
  package: string;
  start: string;
  end: string;
  downloads: {
    downloads: number;
    day: string;
  }[];
}

interface RenderFunction {
  ({
    ref,
  }: {
    ref: RefObject<SVGSVGElement>;
    xScale?: ScaleTime<[Date, Date], number, unknown>;
    yScale?: ScaleLinear<[number, number], number, unknown>;
  }): void;
}

const render: RenderFunction = ({ ref, xScale, yScale }) => {
  const width = ref.current.clientWidth;
  const height = ref.current.clientHeight;
  const x = scaleUtc(
    extent<any, Date>(data.downloads, (v) => new Date(v.day)),
    [0, width]
  )//.nice();
  const y = scaleLinear(
    extent(data.downloads, (v) => v.downloads),
    [height, 0]
  ).nice();

  const svg = select(ref.current)
    .attr("transform", "translate(0, 0)")
    .style("overflow", "visible");

  svg.selectAll("*").remove();

  const xAxis = axisBottom(x).ticks(utcMonth.every(1));
  svg.call((g) =>
    g.append("g").attr("transform", `translate(0, ${height})`).call(xAxis)
  );

  const yAxis = axisLeft(y);
  //   yAxis.ticks(10);
  svg.append("g").call(yAxis);

  svg
    .append("g")
    .attr("class", "path")
    .append("path")
    .attr("stroke", "black")
    .attr("fill", "none")
    .attr(
      "d",
      line<any>()
        .x((v) => x(new Date(v.day)))
        .y((v) => y(v.downloads))
        .curve(curveCatmullRom)(data.downloads)
    );
};

const PlotWithBrush = (props: any) => {
  const { parentRef, width, height } = useParentSize({ debounceTime: 150 });
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    // if (parentRef.current) {
    render({ ref });
    // }
  }, [parentRef.current]);
  return (
    <div ref={parentRef} {...props}>
      <svg width={width} height={height} ref={ref} />
    </div>
  );
};

export default PlotWithBrush;
