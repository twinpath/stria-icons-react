import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Tally3Duotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M32 32H32C14.327 32 0 46.327 0 64V448C0 465.673 14.327 480 32 480H32C49.673 480 64 465.673 64 448V64C64 46.327 49.673 32 32 32ZM160 32H160C142.327 32 128 46.327 128 64V448C128 465.673 142.327 480 160 480H160C177.673 480 192 465.673 192 448V64C192 46.327 177.673 32 160 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M288 32.001H288C270.327 32.001 256 46.327 256 64.001V448.001C256 465.674 270.327 480.001 288 480.001H288C305.673 480.001 320 465.674 320 448.001V64.001C320 46.327 305.673 32.001 288 32.001Z" })
    ]
  }
));
Tally3Duotone.displayName = "Tally3Duotone";
var Tally3_default = Tally3Duotone;
export {
  Tally3_default as default
};
