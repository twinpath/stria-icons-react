import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Tally1Thin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M40 40V472C40 476.422 36.422 480 32 480S24 476.422 24 472V40C24 35.578 27.578 32 32 32S40 35.578 40 40Z" })
  }
));
Tally1Thin.displayName = "Tally1Thin";
var Tally1_default = Tally1Thin;
export {
  Tally1_default as default
};
