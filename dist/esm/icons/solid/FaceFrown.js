import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const FaceFrownSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M496 256C496 388.581 388.581 496 256 496S16 388.581 16 256S123.419 16 256 16S496 123.419 496 256ZM370.688 373.797C342.312 339.594 300.406 320 256 320S169.688 339.594 141.188 373.703C127.688 390.001 152.312 410.5 165.812 394.203C188.188 367.406 221.094 352 256 352S323.812 367.406 346.188 394.203C359.688 410.5 384.312 390.001 370.688 373.797ZM144 208C144 225.703 158.312 240 176 240S208 225.703 208 208S193.688 176 176 176S144 190.297 144 208ZM304 208C304 225.703 318.312 240 336 240S368 225.703 368 208S353.688 176 336 176S304 190.297 304 208Z" })
  }
));
FaceFrownSolid.displayName = "FaceFrownSolid";
var FaceFrown_default = FaceFrownSolid;
export {
  FaceFrown_default as default
};
