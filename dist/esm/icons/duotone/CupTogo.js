import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CupTogoDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M74.543 482.625C75.918 499.25 89.793 512 106.418 512H340.918C357.543 512 371.418 499.25 372.793 482.625L378.344 416H68.992L74.543 482.625ZM45 128L55.664 256H391.672L402.336 128H45Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M432 64H416L392.875 17.75C387.375 6.875 376.375 0 364.25 0H83.75C71.625 0 60.625 6.875 55.125 17.75L32 64H16C7.125 64 0 71.125 0 80V112C0 120.875 7.125 128 16 128H432C440.875 128 448 120.875 448 112V80C448 71.125 440.875 64 432 64ZM69.324 416H378.676L392.004 256H55.996L69.324 416Z" })
    ]
  }
));
CupTogoDuotone.displayName = "CupTogoDuotone";
var CupTogo_default = CupTogoDuotone;
export {
  CupTogo_default as default
};
