import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const LeftLongSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M119.749 377.594L7.679 273.592C-2.56 264.094 -2.56 247.904 7.679 238.404L119.749 134.404C126.741 127.92 136.933 126.186 145.687 130C154.444 133.81 160.104 142.451 160.104 151.998V216H471.999C494.093 216 511.999 233.906 511.999 256S494.093 296 471.999 296H160.104V360C160.104 369.547 154.444 378.187 145.687 382.002C136.933 385.812 126.741 384.078 119.749 377.594Z" })
  }
));
LeftLongSolid.displayName = "LeftLongSolid";
var LeftLong_default = LeftLongSolid;
export {
  LeftLong_default as default
};
