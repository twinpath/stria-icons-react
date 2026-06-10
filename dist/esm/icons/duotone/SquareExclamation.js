import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquareExclamationDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM200 152C200 138.75 210.75 128 224 128S248 138.75 248 152V280C248 293.25 237.25 304 224 304S200 293.25 200 280V152ZM224 400C206.637 400 192.562 385.924 192.562 368.561C192.562 351.199 206.637 337.123 224 337.123S255.438 351.199 255.438 368.561C255.438 385.924 241.363 400 224 400Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M224.438 337.123C207.074 337.123 193 351.199 193 368.561C193 385.924 207.074 400 224.438 400S255.875 385.924 255.875 368.561C255.875 351.199 241.801 337.123 224.438 337.123ZM224.438 304C237.688 304 248.438 293.25 248.438 280V152C248.438 138.75 237.688 128 224.438 128S200.438 138.75 200.438 152V280C200.438 293.25 211.188 304 224.438 304Z" })
    ]
  }
));
SquareExclamationDuotone.displayName = "SquareExclamationDuotone";
var SquareExclamation_default = SquareExclamationDuotone;
export {
  SquareExclamation_default as default
};
