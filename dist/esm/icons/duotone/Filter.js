import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const FilterDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M504.625 84.186L320 306.822V455.984C320 475.5 298.031 486.688 282.25 475.641L202.25 419.656C195.813 415.172 192 407.828 192 400V306.822L7.375 84.186C-9.965 63.275 5.213 32 32.701 32H479.299C506.787 32 521.965 63.275 504.625 84.186Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
FilterDuotone.displayName = "FilterDuotone";
var Filter_default = FilterDuotone;
export {
  Filter_default as default
};
