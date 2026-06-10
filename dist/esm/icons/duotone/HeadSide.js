import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const HeadSideDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M509.222 275C488.223 227.875 460.724 123.25 436.101 88.25C397.603 33.625 334.481 0 266.11 0H191.989C85.995 0 0 86 0 192C0 248.75 24.749 299.625 63.996 334.875V512H319.982V448H383.979C419.352 448 447.975 419.375 447.975 384V320H479.973C503.097 320 518.596 296.125 509.222 275ZM352.002 224C334.378 224 320.004 209.625 320.004 192S334.378 160 352.002 160S384 174.375 384 192S369.626 224 352.002 224Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M351.998 224C334.374 224 320 209.625 320 192S334.374 160 351.998 160S383.996 174.375 383.996 192S369.622 224 351.998 224Z" })
    ]
  }
));
HeadSideDuotone.displayName = "HeadSideDuotone";
var HeadSide_default = HeadSideDuotone;
export {
  HeadSide_default as default
};
