import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const NotesDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M432 96H144C117.49 96 96 117.49 96 144V432C96 458.51 117.49 480 144 480H384V384H480V144C480 117.49 458.51 96 432 96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M384 384V480L480 384H384ZM336 0H64C28.654 0 0 28.654 0 64V336C0 362.508 21.49 384 48 384V80C48 62.328 62.326 48 80 48H384C384 21.492 362.51 0 336 0Z" })
    ]
  }
));
NotesDuotone.displayName = "NotesDuotone";
var Notes_default = NotesDuotone;
export {
  Notes_default as default
};
