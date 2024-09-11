import * as React from "react";

const MotionLine = (props: React.SVGProps<SVGCircleElement>) => {
  console.log("line render...");
  return <circle {...props} />;
};

export { MotionLine };