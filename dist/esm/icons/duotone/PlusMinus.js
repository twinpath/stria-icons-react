import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const PlusMinusDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M344 512H40C17.906 512 0 494.094 0 472S17.906 432 40 432H344C366.094 432 384 449.906 384 472S366.094 512 344 512Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M368 176C368 198.094 350.094 216 328 216H232V312C232 334.094 214.094 352 192 352S152 334.094 152 312V216H56C33.906 216 16 198.094 16 176S33.906 136 56 136H152V40C152 17.906 169.906 0 192 0S232 17.906 232 40V136H328C350.094 136 368 153.906 368 176Z" })
    ]
  }
));
PlusMinusDuotone.displayName = "PlusMinusDuotone";
var PlusMinus_default = PlusMinusDuotone;
export {
  PlusMinus_default as default
};
