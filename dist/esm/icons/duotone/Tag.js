import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TagDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M0 60.001C0 44.537 12.536 32.001 28 32.001H214.804C227.562 32.001 245.381 39.381 254.402 48.403L431.598 225.605C453.468 247.475 453.467 282.933 431.596 304.802L272.786 463.6C250.917 485.468 215.461 485.467 193.592 463.599L16.402 286.403C7.381 277.382 0 259.562 0 246.805V60.001ZM80 144.001C80 161.678 94.333 176.001 112 176.001S144 161.678 144 144.001S129.667 112.001 112 112.001S80 126.324 80 144.001Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
TagDuotone.displayName = "TagDuotone";
var Tag_default = TagDuotone;
export {
  Tag_default as default
};
