import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TabletButtonDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M0 384V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V384H0ZM224 480C206.25 480 192 465.75 192 448S206.25 416 224 416S256 430.25 256 448S241.75 480 224 480Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M448 64V384H0V64C0 28.652 28.654 0 64 0H384C419.346 0 448 28.652 448 64Z" })
    ]
  }
));
TabletButtonDuotone.displayName = "TabletButtonDuotone";
var TabletButton_default = TabletButtonDuotone;
export {
  TabletButton_default as default
};
