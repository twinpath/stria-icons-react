import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ChevronDownLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M4.249 181.141C7.39 177.703 11.686 175.984 15.999 175.984C19.89 175.984 23.78 177.391 26.858 180.234L223.999 362.203L421.14 180.234C427.64 174.234 437.78 174.609 443.749 181.141C449.749 187.641 449.343 197.734 442.858 203.734L234.858 395.734C228.702 401.422 219.296 401.422 213.14 395.734L5.14 203.734C-1.345 197.734 -1.751 187.641 4.249 181.141Z" })
  }
));
ChevronDownLight.displayName = "ChevronDownLight";
var ChevronDown_default = ChevronDownLight;
export {
  ChevronDown_default as default
};
