import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleThreeQuartersSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M496 256C496 388.547 388.549 496 256 496C123.453 496 16 388.549 16 256S123.453 16 256 16V256H496Z" })
  }
));
CircleThreeQuartersSolid.displayName = "CircleThreeQuartersSolid";
var CircleThreeQuarters_default = CircleThreeQuartersSolid;
export {
  CircleThreeQuarters_default as default
};
