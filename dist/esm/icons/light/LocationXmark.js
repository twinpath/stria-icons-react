import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const LocationXmarkLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M192 0C85.969 0 0 85.969 0 192C0 269.41 26.969 291.035 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.035 384 269.41 384 192C384 85.969 298.031 0 192 0ZM192 473.918C51.932 271.379 32 255.969 32 192C32 103.777 103.775 32 192 32S352 103.777 352 192C352 255.879 332.566 270.674 192 473.918ZM267.312 116.688C261.062 110.438 250.937 110.438 244.688 116.688L192 169.375L139.312 116.688C133.062 110.438 122.937 110.438 116.688 116.688S110.438 133.063 116.688 139.312L169.375 192L116.688 244.688C110.438 250.938 110.438 261.063 116.688 267.312C122.934 273.559 133.059 273.566 139.312 267.312L192 214.625L244.688 267.312C250.934 273.559 261.059 273.566 267.312 267.312C273.562 261.062 273.562 250.937 267.312 244.688L214.625 192L267.312 139.312C273.562 133.062 273.562 122.938 267.312 116.688Z" })
  }
));
LocationXmarkLight.displayName = "LocationXmarkLight";
var LocationXmark_default = LocationXmarkLight;
export {
  LocationXmark_default as default
};
