import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const IdBadgeDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M336 0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V48C384 21.492 362.51 0 336 0ZM144 64H240C248.836 64 256 71.164 256 80S248.836 96 240 96H144C135.164 96 128 88.836 128 80S135.164 64 144 64ZM192 160C227.346 160 256 188.656 256 224S227.346 288 192 288S128 259.344 128 224S156.654 160 192 160ZM288 416H96C87.164 416 80 408.836 80 400C80 355.816 115.816 320 160 320H224C268.184 320 304 355.816 304 400C304 408.836 296.836 416 288 416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M192 160C227.346 160 256 188.654 256 224S227.346 288 192 288S128 259.346 128 224S156.654 160 192 160ZM288 416H96C87.164 416 80 408.836 80 400C80 355.816 115.816 320 160 320H224C268.184 320 304 355.816 304 400C304 408.836 296.836 416 288 416Z" })
    ]
  }
));
IdBadgeDuotone.displayName = "IdBadgeDuotone";
var IdBadge_default = IdBadgeDuotone;
export {
  IdBadge_default as default
};
