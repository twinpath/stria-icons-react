import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const LeftLongRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M145.687 130C154.445 133.811 160.105 142.452 160.105 151.998V232H488C501.25 232 512 242.75 512 256C512 269.25 501.25 280 488 280H160.105V360C160.105 369.547 154.445 378.188 145.687 382.002C136.934 385.813 126.738 384.079 119.75 377.594L7.676 273.594C-2.559 264.094 -2.559 247.905 7.676 238.407L119.75 134.405C126.738 127.92 136.934 126.186 145.687 130Z" })
  }
));
LeftLongRegular.displayName = "LeftLongRegular";
var LeftLong_default = LeftLongRegular;
export {
  LeftLong_default as default
};
