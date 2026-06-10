import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TabletScreenSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V64C448 28.652 419.346 0 384 0ZM288 448C288 456.837 280.837 464 272 464H176C167.163 464 160 456.837 160 448V448C160 439.163 167.163 432 176 432H272C280.837 432 288 439.163 288 448V448ZM384 384H64V64H384V384Z" })
  }
));
TabletScreenSolid.displayName = "TabletScreenSolid";
var TabletScreen_default = TabletScreenSolid;
export {
  TabletScreen_default as default
};
