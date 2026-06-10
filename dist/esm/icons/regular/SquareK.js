import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquareKRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V416ZM313.094 135.156C303.828 125.734 288.609 125.609 279.156 134.906L176 236.496V152C176 138.75 165.25 128 152 128S128 138.75 128 152V360C128 373.25 138.75 384 152 384S176 373.25 176 360V303.859L206.887 273.441L276.266 373.656C280.922 380.391 288.406 384 296.016 384C300.734 384 305.5 382.625 309.656 379.734C320.562 372.188 323.281 357.234 315.734 346.344L243.734 242.344C243.002 241.287 241.93 240.682 241.068 239.779L312.844 169.094C322.281 159.797 322.406 144.609 313.094 135.156Z" })
  }
));
SquareKRegular.displayName = "SquareKRegular";
var SquareK_default = SquareKRegular;
export {
  SquareK_default as default
};
