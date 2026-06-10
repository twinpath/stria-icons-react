import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const HelmetSafetyDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M574.688 393.656C572.156 387.812 566.375 384 560 384H16C9.625 384 3.844 387.812 1.313 393.656C-1.219 399.531 -0.031 406.344 4.375 411C7.031 413.812 72.031 480 288 480S568.969 413.812 571.625 411C576.031 406.344 577.219 399.531 574.688 393.656Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M544 280.891C544 191.723 482.166 115.473 404.389 83.527L352 174.223V49.777C352 39.914 344.084 32 334.223 32H241.777C231.916 32 224 39.914 224 49.777V174.223L171.611 83.527C93.834 115.473 32 191.723 32 280.891V384H544V280.891Z" })
    ]
  }
));
HelmetSafetyDuotone.displayName = "HelmetSafetyDuotone";
var HelmetSafety_default = HelmetSafetyDuotone;
export {
  HelmetSafety_default as default
};
