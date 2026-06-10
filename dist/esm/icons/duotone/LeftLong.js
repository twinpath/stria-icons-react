import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const LeftLongDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M160 295.999V215.999H471.988C494.089 215.999 512 233.905 512 255.999S494.088 295.999 471.988 295.999H160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M7.679 238.405L119.749 134.405C126.741 127.921 136.933 126.186 145.687 129.999C154.218 133.714 159.716 142.03 159.999 151.284V360.718C159.716 369.968 154.218 378.288 145.687 382.003C136.933 385.811 126.741 384.077 119.749 377.593L7.679 273.593C-2.56 264.093 -2.56 247.905 7.679 238.405Z" })
    ]
  }
));
LeftLongDuotone.displayName = "LeftLongDuotone";
var LeftLong_default = LeftLongDuotone;
export {
  LeftLong_default as default
};
