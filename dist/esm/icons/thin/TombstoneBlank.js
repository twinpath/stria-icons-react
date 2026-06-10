import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TombstoneBlankThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M40 464C44.406 464 48 460.422 48 456V192C48 94.953 126.969 16 224 16S400 94.953 400 192V456C400 460.422 403.594 464 408 464S416 460.422 416 456V192C416 86.125 329.875 0 224 0S32 86.125 32 192V456C32 460.422 35.594 464 40 464ZM440 496H8C3.594 496 0 499.578 0 504S3.594 512 8 512H440C444.406 512 448 508.422 448 504S444.406 496 440 496Z" })
  }
));
TombstoneBlankThin.displayName = "TombstoneBlankThin";
var TombstoneBlank_default = TombstoneBlankThin;
export {
  TombstoneBlank_default as default
};
