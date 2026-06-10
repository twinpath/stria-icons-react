import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ToiletPaperBlankUnderDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M416 384H96C43 384 0 298 0 192C0 86 43 0 96 0H416C363 0 320 86 320 192C320 298 363 384 416 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M416 0C363 0 320 86 320 192C320 276.035 347.068 347.32 384.678 373.328L384.678 373.328C394.508 380.127 405.018 384 416 384H128V480C128 497.672 142.326 512 160 512H480C497.674 512 512 497.672 512 480V192C512 86 469 0 416 0ZM384 192C384 156.625 398.375 128 416 128S448 156.625 448 192S433.625 256 416 256S384 227.375 384 192Z" })
    ]
  }
));
ToiletPaperBlankUnderDuotone.displayName = "ToiletPaperBlankUnderDuotone";
var ToiletPaperBlankUnder_default = ToiletPaperBlankUnderDuotone;
export {
  ToiletPaperBlankUnder_default as default
};
