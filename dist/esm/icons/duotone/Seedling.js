import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SeedlingDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M512.098 32C512.098 155.75 411.848 256 288.098 256V320C288.098 266.484 269.289 217.412 238 178.893C269.449 93.215 351.49 32 448.098 32H512.098Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M64 96H0C0 219.75 100.25 320 224 320V448C224 465.6 238.4 480 256 480H256C273.6 480 288 465.6 288 448V320C288 196.288 187.712 96 64 96Z" })
    ]
  }
));
SeedlingDuotone.displayName = "SeedlingDuotone";
var Seedling_default = SeedlingDuotone;
export {
  Seedling_default as default
};
