import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowDownLongRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M7.031 335.031C11.719 330.344 17.844 328 24 328S36.281 330.344 40.969 335.031L136 430.062V24C136 10.75 146.75 0 160 0S184 10.75 184 24V430.062L279.031 335.031C288.406 325.656 303.594 325.656 312.969 335.031S322.344 359.594 312.969 368.969L176.969 504.969C167.594 514.344 152.406 514.344 143.031 504.969L7.031 368.969C-2.344 359.594 -2.344 344.406 7.031 335.031Z" })
  }
));
ArrowDownLongRegular.displayName = "ArrowDownLongRegular";
var ArrowDownLong_default = ArrowDownLongRegular;
export {
  ArrowDownLong_default as default
};
