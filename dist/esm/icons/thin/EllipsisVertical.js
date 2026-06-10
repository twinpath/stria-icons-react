import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const EllipsisVerticalThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 128 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M80 96C80 87.164 72.836 80 64 80S48 87.164 48 96C48 104.838 55.164 112 64 112S80 104.838 80 96ZM80 256C80 247.164 72.836 240 64 240S48 247.164 48 256C48 264.838 55.164 272 64 272S80 264.838 80 256ZM80 416C80 407.164 72.836 400 64 400S48 407.164 48 416C48 424.838 55.164 432 64 432S80 424.838 80 416Z" })
  }
));
EllipsisVerticalThin.displayName = "EllipsisVerticalThin";
var EllipsisVertical_default = EllipsisVerticalThin;
export {
  EllipsisVertical_default as default
};
