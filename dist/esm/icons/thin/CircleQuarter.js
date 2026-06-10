import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleQuarterThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M223.918 18.381C222.383 18.381 220.825 18.498 219.254 18.736C115.821 34.457 34.075 116.201 18.354 219.637C15.442 238.799 30.887 256 50.268 256H223.618C241.292 256 255.618 241.672 255.618 224V50.648C255.618 32.855 241.122 18.381 223.918 18.381ZM239.618 224C239.618 232.822 232.44 240 223.618 240H50.268C45.487 240 40.936 237.896 37.786 234.23C36.051 232.213 33.276 227.945 34.172 222.041C48.737 126.215 125.834 49.119 221.659 34.555C222.42 34.439 223.174 34.381 223.918 34.381C232.428 34.381 239.618 41.83 239.618 50.648V224Z" })
  }
));
CircleQuarterThin.displayName = "CircleQuarterThin";
var CircleQuarter_default = CircleQuarterThin;
export {
  CircleQuarter_default as default
};
