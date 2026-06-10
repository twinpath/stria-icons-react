import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ChartPyramidDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M292.95 53C276.618 25 235.397 25 218.954 53L137.534 192H374.411L292.95 53ZM506.274 417L449.426 320H62.559L5.741 417C-10.591 444.891 9.852 480 42.741 480H469.276C502.051 480 522.606 445 506.274 417Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M449.867 320H63L137.975 192H374.852L449.867 320Z" })
    ]
  }
));
ChartPyramidDuotone.displayName = "ChartPyramidDuotone";
var ChartPyramid_default = ChartPyramidDuotone;
export {
  ChartPyramid_default as default
};
