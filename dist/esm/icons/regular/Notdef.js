import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const NotdefRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M336 0H48C21.49 0 0 21.49 0 48V464C0 490.51 21.49 512 48 512H336C362.51 512 384 490.51 384 464V48C384 21.49 362.51 0 336 0ZM336 90.164V421.836L221.189 256L336 90.164ZM192 213.836L77.189 48H306.811L192 213.836ZM162.811 256L48 421.836V90.164L162.811 256ZM192 298.164L306.811 464H77.189L192 298.164Z" })
  }
));
NotdefRegular.displayName = "NotdefRegular";
var Notdef_default = NotdefRegular;
export {
  Notdef_default as default
};
