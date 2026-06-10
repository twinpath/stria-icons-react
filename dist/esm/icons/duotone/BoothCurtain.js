import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BoothCurtainDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 32V496C0 504.75 7.25 512 16 512H48C56.75 512 64 504.75 64 496V64H160V0H32C14.25 0 0 14.25 0 32ZM480 0H448V496C448 504.75 455.25 512 464 512H496C504.75 512 512 504.75 512 496V32C512 14.25 497.75 0 480 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M448 0V400C448 426.5 426.5 448 400 448C375.541 448 355.553 429.785 352 406.461C348.447 429.785 328.459 448 304 448S259.551 429.783 256 406.459C252.449 429.783 232.459 448 208 448C181.5 448 160 426.5 160 400V0H448Z" })
    ]
  }
));
BoothCurtainDuotone.displayName = "BoothCurtainDuotone";
var BoothCurtain_default = BoothCurtainDuotone;
export {
  BoothCurtain_default as default
};
