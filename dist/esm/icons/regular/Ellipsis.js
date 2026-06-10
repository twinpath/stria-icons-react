import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const EllipsisRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M400 256C400 282.5 421.5 304 448 304S496 282.5 496 256S474.5 208 448 208S400 229.5 400 256ZM112 256C112 229.5 90.5 208 64 208S16 229.5 16 256S37.5 304 64 304S112 282.5 112 256ZM304 256C304 229.5 282.5 208 256 208S208 229.5 208 256S229.5 304 256 304S304 282.5 304 256Z" })
  }
));
EllipsisRegular.displayName = "EllipsisRegular";
var Ellipsis_default = EllipsisRegular;
export {
  Ellipsis_default as default
};
