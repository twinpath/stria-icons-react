import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TriangleExclamationRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M506.274 417L292.95 53C284.784 39 270.395 32 255.995 32C241.592 32 227.176 39 218.954 53L5.741 417C-10.591 444.891 9.852 480 42.739 480H469.276C502.051 480 522.606 445 506.274 417ZM52.585 432L255.954 84.803L459.428 432H52.585ZM256.001 337.123C238.637 337.123 224.563 351.199 224.563 368.561C224.563 385.924 238.637 400 256.001 400S287.438 385.924 287.438 368.561C287.438 351.199 273.364 337.123 256.001 337.123ZM232.001 184V280C232.001 293.25 242.751 304 256.001 304S280.001 293.25 280.001 280V184C280.001 170.75 269.251 160 256.001 160S232.001 170.75 232.001 184Z" })
  }
));
TriangleExclamationRegular.displayName = "TriangleExclamationRegular";
var TriangleExclamation_default = TriangleExclamationRegular;
export {
  TriangleExclamation_default as default
};
