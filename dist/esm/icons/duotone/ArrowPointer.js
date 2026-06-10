import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowPointerDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M235.844 414.81C245.339 434.752 236.874 458.615 216.935 468.116L216.935 468.116C196.989 477.619 173.116 469.151 163.618 449.203L117 351.298L143.607 319.992H190.694L235.844 414.81Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M318.449 304.476C314.918 313.82 305.98 319.992 295.996 319.992H143.889L42.281 439.545C37.64 445.014 30.906 447.998 24 447.998C21.218 447.998 18.422 447.514 15.719 446.529C6.281 443.061 0 434.06 0 423.997V55.98C0 46.542 5.531 37.979 14.125 34.104C22.75 30.26 32.828 31.76 39.874 37.979L311.871 277.99C319.355 284.6 321.98 295.147 318.449 304.476Z" })
    ]
  }
));
ArrowPointerDuotone.displayName = "ArrowPointerDuotone";
var ArrowPointer_default = ArrowPointerDuotone;
export {
  ArrowPointer_default as default
};
