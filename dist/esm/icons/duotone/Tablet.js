import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TabletDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M0 384V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V384H0ZM288 448C288 456.837 280.837 464 272 464H176C167.163 464 160 456.837 160 448V448C160 439.163 167.163 432 176 432H272C280.837 432 288 439.163 288 448V448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M448 64V384H0V64C0 28.652 28.654 0 64 0H384C419.346 0 448 28.652 448 64Z" })
    ]
  }
));
TabletDuotone.displayName = "TabletDuotone";
var Tablet_default = TabletDuotone;
export {
  Tablet_default as default
};
