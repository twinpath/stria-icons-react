import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MonitorWaveformSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M480 128H96V256H197C200 256 202.75 257.75 204.125 260.375L224 300.25L273.75 200.875C279.625 189 296.375 189 302.25 200.875L329.875 256H400C408.875 256 416 263.125 416 272S408.875 288 400 288H310.125L288 243.75L238.25 343.125C232.375 355 215.625 355 209.75 343.125L182.125 288H96V384H480V128ZM528 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H528C554.5 480 576 458.5 576 432V80C576 53.5 554.5 32 528 32ZM512 416H64V96H512V416Z" })
  }
));
MonitorWaveformSolid.displayName = "MonitorWaveformSolid";
var MonitorWaveform_default = MonitorWaveformSolid;
export {
  MonitorWaveform_default as default
};
