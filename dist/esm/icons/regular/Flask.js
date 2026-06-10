import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const FlaskRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M437.232 403.5L319.992 215V48H327.99C341.24 48 351.988 37.25 351.988 24S341.24 0 327.99 0H120.01C106.76 0 96.012 10.75 96.012 24S106.76 48 120.01 48H128.008V215L10.767 403.5C-18.479 450.625 15.267 512 70.889 512H377.111C432.732 512 466.478 450.5 437.232 403.5ZM119.228 320L176.008 228.709V48H271.992V228.709L328.771 320H119.228Z" })
  }
));
FlaskRegular.displayName = "FlaskRegular";
var Flask_default = FlaskRegular;
export {
  Flask_default as default
};
