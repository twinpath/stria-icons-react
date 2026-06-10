import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const StarHalfSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M287.999 439.555L157.073 508.25C152.196 510.828 147.122 512 142.19 512C123.599 512 107.018 495.344 110.583 474.551L135.628 329.066L29.718 226.078C10.682 207.58 21.202 175.287 47.468 171.49L193.827 150.195L259.259 17.805C265.141 5.898 276.532 0 287.927 0C287.95 0 287.975 0.01 287.999 0.01V439.555Z" })
  }
));
StarHalfSolid.displayName = "StarHalfSolid";
var StarHalf_default = StarHalfSolid;
export {
  StarHalf_default as default
};
