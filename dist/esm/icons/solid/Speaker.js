import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SpeakerSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M336 0H48C21.5 0 0 21.5 0 48V464C0 490.5 21.5 512 48 512H336C362.5 512 384 490.5 384 464V48C384 21.5 362.5 0 336 0ZM192 64C218.5 64 240 85.5 240 112S218.5 160 192 160S144 138.5 144 112S165.5 64 192 64ZM192 448C130.188 448 80 397.828 80 336S130.188 224 192 224S304 274.172 304 336S253.812 448 192 448ZM192 272C156.688 272 128 300.672 128 336S156.688 400 192 400S256 371.328 256 336S227.312 272 192 272Z" })
  }
));
SpeakerSolid.displayName = "SpeakerSolid";
var Speaker_default = SpeakerSolid;
export {
  Speaker_default as default
};
