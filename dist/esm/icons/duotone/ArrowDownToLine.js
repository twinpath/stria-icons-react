import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowDownToLineDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M352 416H32C14.312 416 0 430.312 0 448S14.312 480 32 480H352C369.688 480 384 465.688 384 448S369.688 416 352 416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M86.625 169.375L160 242.75V64C160 46.312 174.313 32 192 32S224 46.312 224 64V242.75L297.375 169.375C303.625 163.125 311.813 160 320 160S336.375 163.125 342.625 169.375C355.125 181.875 355.125 202.125 342.625 214.625L214.625 342.625C202.125 355.125 181.875 355.125 169.375 342.625L41.375 214.625C28.875 202.125 28.875 181.875 41.375 169.375S74.125 156.875 86.625 169.375Z" })
    ]
  }
));
ArrowDownToLineDuotone.displayName = "ArrowDownToLineDuotone";
var ArrowDownToLine_default = ArrowDownToLineDuotone;
export {
  ArrowDownToLine_default as default
};
