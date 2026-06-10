import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const RightToLineRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M448 424V88C448 74.75 437.25 64 424 64S400 74.75 400 88V424C400 437.25 410.75 448 424 448S448 437.25 448 424ZM342.625 278.25C348.875 272 352 263.812 352 255.625S348.875 239.25 342.625 233L192.176 97.092C161.309 69.207 112 91.113 112 132.711V175.625H48C21.492 175.625 0 197.115 0 223.625V287.625C0 314.135 21.492 335.625 48 335.625H112V378.912C112 420.543 161.371 442.436 192.227 414.488L342.625 278.25ZM160 287.625H48V223.625H160V134.258L297.367 255.625L160 376.992V287.625Z" })
  }
));
RightToLineRegular.displayName = "RightToLineRegular";
var RightToLine_default = RightToLineRegular;
export {
  RightToLine_default as default
};
