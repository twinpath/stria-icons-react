import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowDownLongDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M160 434.75L128 402.75V32C128 14.312 142.312 0 160 0S192 14.312 192 32V402.75L160 434.75Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M310.625 329.375C323.125 341.875 323.125 362.125 310.625 374.625L182.625 502.625C170.125 515.125 149.875 515.125 137.375 502.625L9.375 374.625C-3.125 362.125 -3.125 341.875 9.375 329.375S42.125 316.875 54.625 329.375L160 434.75L265.375 329.375C271.625 323.125 279.813 320 288 320S304.375 323.125 310.625 329.375Z" })
    ]
  }
));
ArrowDownLongDuotone.displayName = "ArrowDownLongDuotone";
var ArrowDownLong_default = ArrowDownLongDuotone;
export {
  ArrowDownLong_default as default
};
