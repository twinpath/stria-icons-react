import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const RightLongDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M352 216V296H40.012C17.912 296 0 278.094 0 256S17.912 216 40.012 216H352Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M504.32 273.594L392.25 377.594C385.258 384.078 375.066 385.812 366.312 382C357.781 378.285 352.283 369.969 352 360.715V151.281C352.283 142.031 357.781 133.711 366.312 129.996C375.066 126.188 385.258 127.922 392.25 134.406L504.32 238.406C514.559 247.906 514.559 264.094 504.32 273.594Z" })
    ]
  }
));
RightLongDuotone.displayName = "RightLongDuotone";
var RightLong_default = RightLongDuotone;
export {
  RightLong_default as default
};
