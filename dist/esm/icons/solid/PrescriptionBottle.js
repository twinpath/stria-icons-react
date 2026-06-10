import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const PrescriptionBottleSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M32 192H144C152.801 192 160 199.199 160 208C160 216.799 152.801 224 144 224H32V288H144C152.801 288 160 295.199 160 304C160 312.799 152.801 320 144 320H32V384H144C152.801 384 160 391.199 160 400C160 408.799 152.801 416 144 416H32V448C32 483.199 60.801 512 96 512H288C323.199 512 352 483.199 352 448V128H32V192ZM360 0H24C10.75 0 0 10.75 0 24V72C0 85.25 10.75 96 24 96H360C373.25 96 384 85.25 384 72V24C384 10.75 373.25 0 360 0Z" })
  }
));
PrescriptionBottleSolid.displayName = "PrescriptionBottleSolid";
var PrescriptionBottle_default = PrescriptionBottleSolid;
export {
  PrescriptionBottle_default as default
};
