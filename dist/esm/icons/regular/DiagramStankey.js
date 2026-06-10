import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const DiagramStankeyRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M608 296C608 282.75 597.25 272 584 272H56C42.75 272 32 282.75 32 296S42.75 320 56 320H178.4L267.406 468.344C271.75 475.578 279.562 480 288 480H584C597.25 480 608 469.25 608 456S597.25 432 584 432H301.594L234.398 320H584C597.25 320 608 309.25 608 296ZM56 240H248C256.438 240 264.25 235.578 268.594 228.344L357.594 80H584C597.25 80 608 69.25 608 56S597.25 32 584 32H344C335.562 32 327.75 36.422 323.406 43.656L234.406 192H56C42.75 192 32 202.75 32 216S42.75 240 56 240Z" })
  }
));
DiagramStankeyRegular.displayName = "DiagramStankeyRegular";
var DiagramStankey_default = DiagramStankeyRegular;
export {
  DiagramStankey_default as default
};
