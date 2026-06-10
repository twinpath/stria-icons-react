import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const NoteDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M400 32H48C21.49 32 0 53.49 0 80V432C0 458.51 21.49 480 48 480H320V352H448V80C448 53.49 426.51 32 400 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M448 352L320 480V352H448Z" })
    ]
  }
));
NoteDuotone.displayName = "NoteDuotone";
var Note_default = NoteDuotone;
export {
  Note_default as default
};
