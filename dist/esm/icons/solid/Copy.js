import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CopySolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 96V0H272C245.49 0 224 21.492 224 48V336C224 362.508 245.49 384 272 384H464C490.51 384 512 362.508 512 336V128H416C398.4 128 384 113.602 384 96ZM416 0V96H512L416 0ZM192 352V128H48C21.49 128 0 149.49 0 176V464C0 490.51 21.49 512 48 512H240C266.51 512 288 490.51 288 464V416H256C220.654 416 192 387.346 192 352Z" })
  }
));
CopySolid.displayName = "CopySolid";
var Copy_default = CopySolid;
export {
  Copy_default as default
};
