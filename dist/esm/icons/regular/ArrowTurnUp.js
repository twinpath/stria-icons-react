import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowTurnUpRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M336.969 168.969C327.594 178.344 312.406 178.344 303.031 168.969L216 81.938V488C216 501.25 205.25 512 192 512H24C10.75 512 0 501.25 0 488S10.75 464 24 464H168V81.938L80.969 168.969C71.594 178.344 56.406 178.344 47.031 168.969S37.656 144.406 47.031 135.031L175.031 7.031C179.719 2.344 185.844 0 192 0S204.281 2.344 208.969 7.031L336.969 135.031C346.344 144.406 346.344 159.594 336.969 168.969Z" })
  }
));
ArrowTurnUpRegular.displayName = "ArrowTurnUpRegular";
var ArrowTurnUp_default = ArrowTurnUpRegular;
export {
  ArrowTurnUp_default as default
};
