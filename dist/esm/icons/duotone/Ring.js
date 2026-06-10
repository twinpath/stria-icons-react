import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const RingDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M64 208C64 163.82 150 128 256 128C362 128 448 163.82 448 208C448 229.81 427.05 249.57 393.1 264C358.25 249.19 309.71 240 256 240S153.75 249.19 118.9 264C85 249.57 64 229.81 64 208Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M256 64C110.061 64 0 125.91 0 208V306.131C0 384.48 114.621 448 256 448C397.381 448 512 384.48 512 306.131V208C512 125.91 401.941 64 256 64ZM256 288C150 288 64 252.18 64 208S150 128 256 128C362 128 448 163.82 448 208S362 288 256 288Z" })
    ]
  }
));
RingDuotone.displayName = "RingDuotone";
var Ring_default = RingDuotone;
export {
  Ring_default as default
};
