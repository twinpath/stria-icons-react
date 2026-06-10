import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const NeuterThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M368 176C368 78.799 289.203 0 192 0C94.799 0 16 78.799 16 176C16 270.5 90.541 347.385 184 351.596V504C184 508.422 187.594 512 192 512S200 508.422 200 504V351.596C293.463 347.385 368 270.5 368 176ZM192 336C103.775 336 32 264.225 32 176S103.775 16 192 16S352 87.775 352 176S280.225 336 192 336Z" })
  }
));
NeuterThin.displayName = "NeuterThin";
var Neuter_default = NeuterThin;
export {
  Neuter_default as default
};
