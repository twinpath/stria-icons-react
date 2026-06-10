import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const InfoRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 192 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M168 464H120V200C120 186.75 109.25 176 96 176H56C42.75 176 32 186.75 32 200S42.75 224 56 224H72V464H24C10.75 464 0 474.75 0 488S10.75 512 24 512H168C181.25 512 192 501.25 192 488S181.25 464 168 464ZM96 128C122.51 128 144 106.51 144 80S122.51 32 96 32S48 53.49 48 80S69.49 128 96 128Z" })
  }
));
InfoRegular.displayName = "InfoRegular";
var Info_default = InfoRegular;
export {
  Info_default as default
};
