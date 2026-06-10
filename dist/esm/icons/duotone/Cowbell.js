import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CowbellDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M384.258 122.375C381.508 107.125 368.132 96 352.631 96H95.363C79.861 96 66.485 107.125 63.735 122.375L0.481 474.375C-2.849 493.33 11.49 512 32.108 512H415.885C436.534 512 450.84 493.312 447.513 474.375L384.258 122.375Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M336 48V96H288V48H160V96H112V48C112 22.398 134.4 0 160 0H288C313.6 0 336 22.398 336 48Z" })
    ]
  }
));
CowbellDuotone.displayName = "CowbellDuotone";
var Cowbell_default = CowbellDuotone;
export {
  Cowbell_default as default
};
