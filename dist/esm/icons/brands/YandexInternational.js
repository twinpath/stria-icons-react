import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const YandexInternationalBrands = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M129.5 512V345.9L18.5 48h55.8l81.8 229.7L250.2 0h51.3L180.8 347.8V512h-51.3z" })
  }
));
YandexInternationalBrands.displayName = "YandexInternationalBrands";
var YandexInternational_default = YandexInternationalBrands;
export {
  YandexInternational_default as default
};
