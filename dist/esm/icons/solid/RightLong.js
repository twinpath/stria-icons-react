import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const RightLongSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M392.25 134.405L504.32 238.407C514.559 247.905 514.559 264.095 504.32 273.595L392.25 377.595C385.258 384.079 375.066 385.813 366.312 381.999C357.555 378.188 351.895 369.548 351.895 360.001V295.999H40C17.906 295.999 0 278.093 0 255.999S17.906 215.999 40 215.999H351.895V151.999C351.895 142.452 357.555 133.811 366.312 129.997C375.066 126.186 385.258 127.921 392.25 134.405Z" })
  }
));
RightLongSolid.displayName = "RightLongSolid";
var RightLong_default = RightLongSolid;
export {
  RightLong_default as default
};
