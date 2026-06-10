import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Mp3PlayerDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M336 0H48C21.5 0 0 21.5 0 48V464C0 490.5 21.5 512 48 512H336C362.5 512 384 490.5 384 464V48C384 21.5 362.5 0 336 0ZM192 448C139 448 96 405 96 352S139 256 192 256S288 299 288 352S245 448 192 448ZM320 192H64V64H320V192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M64 64V192H320V64H64ZM192 256C139 256 96 299 96 352S139 448 192 448S288 405 288 352S245 256 192 256ZM192 384C174.375 384 160 369.625 160 352S174.375 320 192 320S224 334.375 224 352S209.625 384 192 384Z" })
    ]
  }
));
Mp3PlayerDuotone.displayName = "Mp3PlayerDuotone";
var Mp3Player_default = Mp3PlayerDuotone;
export {
  Mp3Player_default as default
};
