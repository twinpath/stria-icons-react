import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CheeseSwissSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M368 336.005C341.5 336.005 320 314.506 320 288.007H0V448.001C0 465.626 14.375 480 32 480H480C497.625 480 512 465.626 512 448.001V288.007H416C416 314.506 394.5 336.005 368 336.005ZM176 432.002C149.5 432.002 128 410.503 128 384.004S149.5 336.005 176 336.005S224 357.505 224 384.004S202.5 432.002 176 432.002ZM299.875 32.017C292.125 31.767 284.625 34.267 278.75 39.017L217 87.015C229.625 107.889 224.625 134.763 205.5 149.763C186.25 164.762 158.875 162.887 141.875 145.513L0 256.009H512C512 136.138 417.999 38.267 299.875 32.017Z" })
  }
));
CheeseSwissSolid.displayName = "CheeseSwissSolid";
var CheeseSwiss_default = CheeseSwissSolid;
export {
  CheeseSwiss_default as default
};
