import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BrowserRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M448 32H64C28.654 32 0 60.652 0 96V416C0 451.348 28.654 480 64 480H448C483.346 480 512 451.348 512 416V96C512 60.652 483.346 32 448 32ZM464 416C464 424.824 456.822 432 448 432H64C55.178 432 48 424.824 48 416V160H464V416Z" })
  }
));
BrowserRegular.displayName = "BrowserRegular";
var Browser_default = BrowserRegular;
export {
  Browser_default as default
};
