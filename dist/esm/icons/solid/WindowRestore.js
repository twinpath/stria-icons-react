import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const WindowRestoreSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M320 128H64C28.654 128 0 156.652 0 192V448C0 483.344 28.654 512 64 512H320C355.346 512 384 483.344 384 448V192C384 159.723 357.684 128 320 128ZM320 256H64V192H320V256ZM448 0H192C156.654 0 128 28.652 128 64V96H192V64H448V320H416V384H448C483.346 384 512 355.344 512 320V64C512 28.652 483.346 0 448 0Z" })
  }
));
WindowRestoreSolid.displayName = "WindowRestoreSolid";
var WindowRestore_default = WindowRestoreSolid;
export {
  WindowRestore_default as default
};
