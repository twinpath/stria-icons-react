import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const VideoSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M384 112V400C384 426.51 362.51 448 336 448H48C21.49 448 0 426.51 0 400V112C0 85.49 21.49 64 48 64H336C362.51 64 384 85.49 384 112ZM576 127.5V384.406C576 409.906 546.812 424.797 525.594 410.203L416 334.703V177.297L525.594 101.703C546.906 87.094 576 102.094 576 127.5Z" })
  }
));
VideoSolid.displayName = "VideoSolid";
var Video_default = VideoSolid;
export {
  Video_default as default
};
