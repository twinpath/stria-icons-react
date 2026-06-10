import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const EjectDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M447.965 432.01V432.01C447.965 458.404 426.369 480 399.975 480H47.986C21.594 480 0 458.406 0 432.014V432.014C0 405.619 21.596 384.023 47.99 384.023H399.979C426.371 384.023 447.965 405.617 447.965 432.01Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M48.013 319.988H399.986C441.607 319.988 463.48 270.359 435.359 239.607L259.373 47.469C240.373 26.844 207.627 26.844 188.627 47.469L12.64 239.607C-15.481 270.234 6.392 319.988 48.013 319.988Z" })
    ]
  }
));
EjectDuotone.displayName = "EjectDuotone";
var Eject_default = EjectDuotone;
export {
  Eject_default as default
};
