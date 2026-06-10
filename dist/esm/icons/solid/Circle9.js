import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Circle9Solid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 176C229.531 176 208 197.531 208 224S229.531 272 256 272C277.062 272 296 257.906 302.031 237.719C303.344 233.312 304 228.719 304 224C304 197.531 282.469 176 256 176ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM311.719 308.406L231.781 378.094C227.219 382.062 221.594 384 216 384C209.312 384 202.656 381.219 197.906 375.781C189.188 365.781 190.25 350.625 200.219 341.906L229.979 315.963C189.732 304.533 160 267.859 160 224C160 171.062 203.062 128 256 128S352 171.062 352 224C352 265.301 324.451 297.289 311.719 308.406Z" })
  }
));
Circle9Solid.displayName = "Circle9Solid";
var Circle9_default = Circle9Solid;
export {
  Circle9_default as default
};
