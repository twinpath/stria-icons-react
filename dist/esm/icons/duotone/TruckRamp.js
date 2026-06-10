import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TruckRampDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M640 416C640 469.02 597.02 512 544 512S448 469.02 448 416S490.98 320 544 320S640 362.98 640 416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M640 0V332.145C616.537 305.305 582.451 288 544 288C477.424 288 423.554 339.072 417.426 404.045L22.769 511.73C18.519 512.855 14.144 510.355 12.894 506.105L0.269 459.732C-0.856 455.607 1.644 451.232 5.894 449.982L352.008 355.611V64C352.008 28.654 380.661 0 416.008 0H640Z" })
    ]
  }
));
TruckRampDuotone.displayName = "TruckRampDuotone";
var TruckRamp_default = TruckRampDuotone;
export {
  TruckRamp_default as default
};
