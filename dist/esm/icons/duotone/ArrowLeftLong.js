import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowLeftLongDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M77 256L109 224H479.75C497.438 224 511.75 238.312 511.75 256S497.438 288 479.75 288H109L77 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M182.625 406.625C170.125 419.125 149.875 419.125 137.375 406.625L9.375 278.625C-3.125 266.125 -3.125 245.875 9.375 233.375L137.375 105.375C149.875 92.875 170.125 92.875 182.625 105.375S195.125 138.125 182.625 150.625L77.25 256L182.625 361.375C188.875 367.625 192 375.812 192 384S188.875 400.375 182.625 406.625Z" })
    ]
  }
));
ArrowLeftLongDuotone.displayName = "ArrowLeftLongDuotone";
var ArrowLeftLong_default = ArrowLeftLongDuotone;
export {
  ArrowLeftLong_default as default
};
