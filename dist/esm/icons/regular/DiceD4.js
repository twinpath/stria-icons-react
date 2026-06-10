import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const DiceD4Regular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M512 309.072C512 302.022 509.671 294.919 504.862 289L280.874 11.875C274.499 4 265.249 0 256 0C246.75 0 237.501 4 231.126 11.875L7.138 289C2.329 294.919 0 302.022 0 309.072C0 318.697 4.341 328.223 12.638 334.5L236.626 505.5C242.126 509.75 249 512 256 512C262.875 512 269.624 509.875 275.374 505.5L499.362 334.5C507.659 328.223 512 318.697 512 309.072ZM232.001 87.125V441.5L54.76 306.375L232.001 87.125ZM279.999 441.5V87.125L457.24 306.375L279.999 441.5Z " })
  }
));
DiceD4Regular.displayName = "DiceD4Regular";
var DiceD4_default = DiceD4Regular;
export {
  DiceD4_default as default
};
