import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowTurnUpLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M347.312 171.312C341.062 177.562 330.937 177.562 324.688 171.312L208 54.625V432C208 476.125 172.109 512 128 512H16C7.156 512 0 504.844 0 496S7.156 480 16 480H128C154.469 480 176 458.469 176 432V54.625L59.312 171.312C53.062 177.562 42.937 177.562 36.688 171.312S30.438 154.937 36.688 148.688L180.688 4.688C183.812 1.562 187.906 0 192 0C196.094 0 200.188 1.562 203.312 4.688L347.312 148.688C353.562 154.938 353.562 165.062 347.312 171.312Z" })
  }
));
ArrowTurnUpLight.displayName = "ArrowTurnUpLight";
var ArrowTurnUp_default = ArrowTurnUpLight;
export {
  ArrowTurnUp_default as default
};
