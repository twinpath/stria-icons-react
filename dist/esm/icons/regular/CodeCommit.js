import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CodeCommitRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M616 232H477.582C465.924 155.109 400.145 96 320 96S174.076 155.109 162.418 232H24C10.75 232 0 242.75 0 256S10.75 280 24 280H162.418C174.076 356.891 239.855 416 320 416S465.924 356.891 477.582 280H616C629.25 280 640 269.25 640 256S629.25 232 616 232ZM320 368C258.242 368 208 317.758 208 256S258.242 144 320 144S432 194.242 432 256S381.758 368 320 368Z" })
  }
));
CodeCommitRegular.displayName = "CodeCommitRegular";
var CodeCommit_default = CodeCommitRegular;
export {
  CodeCommit_default as default
};
