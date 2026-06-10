import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleVThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M368.844 148.422L256 374.109L143.156 148.422C141.172 144.469 136.391 142.859 132.422 144.844C128.469 146.828 126.875 151.625 128.844 155.578L248.844 395.578C250.203 398.281 252.969 400 256 400S261.797 398.281 263.156 395.578L383.156 155.578C385.125 151.625 383.531 146.828 379.578 144.844C375.609 142.891 370.828 144.5 368.844 148.422ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" })
  }
));
CircleVThin.displayName = "CircleVThin";
var CircleV_default = CircleVThin;
export {
  CircleV_default as default
};
