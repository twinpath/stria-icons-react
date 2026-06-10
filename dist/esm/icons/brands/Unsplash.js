import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const UnsplashBrands = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z" })
  }
));
UnsplashBrands.displayName = "UnsplashBrands";
var Unsplash_default = UnsplashBrands;
export {
  Unsplash_default as default
};
