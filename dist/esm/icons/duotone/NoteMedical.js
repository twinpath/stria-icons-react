import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const NoteMedicalDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M400 32H48C21.49 32 0 53.49 0 80V432C0 458.51 21.49 480 48 480H320V352H448V80C448 53.49 426.51 32 400 32ZM320 248C320 252.375 316.375 256 312 256H256V312C256 316.375 252.375 320 248 320H200C195.625 320 192 316.375 192 312V256H136C131.625 256 128 252.375 128 248V200C128 195.625 131.625 192 136 192H192V136C192 131.625 195.625 128 200 128H248C252.375 128 256 131.625 256 136V192H312C316.375 192 320 195.625 320 200V248Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M320 200C320 195.625 316.375 192 312 192H256V136C256 131.625 252.375 128 248 128H200C195.625 128 192 131.625 192 136V192H136C131.625 192 128 195.625 128 200V248C128 252.375 131.625 256 136 256H192V312C192 316.375 195.625 320 200 320H248C252.375 320 256 316.375 256 312V256H312C316.375 256 320 252.375 320 248V200ZM320 352V480L448 352H320Z" })
    ]
  }
));
NoteMedicalDuotone.displayName = "NoteMedicalDuotone";
var NoteMedical_default = NoteMedicalDuotone;
export {
  NoteMedical_default as default
};
