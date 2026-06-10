import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowUpLongLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M4.687 148.688L148.687 4.688C151.812 1.562 155.906 0 160 0S168.187 1.562 171.312 4.688L315.312 148.688C321.562 154.938 321.562 165.063 315.312 171.312S298.937 177.562 292.687 171.312L176 54.625V496C176 504.844 168.844 512 160 512S144 504.844 144 496V54.625L27.312 171.312C21.062 177.562 10.937 177.562 4.687 171.312S-1.563 154.938 4.687 148.688Z" })
  }
));
ArrowUpLongLight.displayName = "ArrowUpLongLight";
var ArrowUpLong_default = ArrowUpLongLight;
export {
  ArrowUpLong_default as default
};
