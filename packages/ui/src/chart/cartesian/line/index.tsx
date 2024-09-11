import { ComponentProps, FC } from "react";
import { Line, LineProps } from "recharts";

export const MotionLine: FC<any> = (props) => {
  return <circle cx={10} cy={10} r={300} fill="red" />;
};
