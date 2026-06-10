import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowUpFromLineSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M86.625 214.625L160 141.25V320C160 337.688 174.312 352 192 352S224 337.688 224 320V141.25L297.375 214.625C303.625 220.875 311.812 224 320 224S336.375 220.875 342.625 214.625C355.125 202.125 355.125 181.875 342.625 169.375L214.625 41.375C202.125 28.875 181.875 28.875 169.375 41.375L41.375 169.375C28.875 181.875 28.875 202.125 41.375 214.625S74.125 227.125 86.625 214.625ZM352 416H32C14.312 416 0 430.312 0 448S14.312 480 32 480H352C369.688 480 384 465.688 384 448S369.688 416 352 416Z" })
  }
));
ArrowUpFromLineSolid.displayName = "ArrowUpFromLineSolid";
var ArrowUpFromLine_default = ArrowUpFromLineSolid;
export {
  ArrowUpFromLine_default as default
};
