import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BoxDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M56.375 53.875L0 158.75C0.375 159.25 0.5 159.5 0.875 160H207.625V32H86.75C72.875 32 60.75 40.75 56.375 53.875ZM390.875 53.875C386.5 40.75 374.375 32 360.5 32H239.625V160H446.375C446.75 159.5 446.875 159.25 447.25 158.75L390.875 53.875Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M240 160V32H208V160H0V432C0 458.51 21.49 480 48 480H400C426.51 480 448 458.51 448 432V160H240Z" })
    ]
  }
));
BoxDuotone.displayName = "BoxDuotone";
var Box_default = BoxDuotone;
export {
  Box_default as default
};
