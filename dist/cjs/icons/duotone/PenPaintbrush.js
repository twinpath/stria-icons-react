var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var PenPaintbrush_exports = {};
__export(PenPaintbrush_exports, {
  default: () => PenPaintbrush_default
});
module.exports = __toCommonJS(PenPaintbrush_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenPaintbrushDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.406 16.418C-5.469 38.292 -5.469 73.729 16.406 95.603L153.174 232.367L232.365 153.185L95.594 16.418C73.719 -5.457 38.281 -5.457 16.406 16.418ZM544 448C512 448 492.777 426.825 495.027 400.999C497.6 371.51 487.691 341.124 465.316 318.613C450.664 303.855 432.338 294.07 412.4 290.065L290.975 411.493C294.596 431.096 303.137 449.912 318.191 465.08C357.285 504.43 435.754 511.998 490.285 511.998C515.875 511.998 544 511.998 544 511.998C561.674 511.998 576 497.671 576 479.999C576 462.326 561.674 448 544 448ZM529.951 127.243C548.701 108.493 548.701 78.072 529.951 59.323L484.701 14.074C465.92 -4.691 435.514 -4.691 416.732 14.074L370.732 60.073L483.92 173.273L529.951 127.243Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M370.74 60.08L58.261 372.52C53.605 377.176 50.498 383.152 49.365 389.638L32.326 487.108C29.793 501.6 42.412 514.213 56.904 511.672L154.433 494.571C160.912 493.436 166.884 490.331 171.535 485.681L483.927 173.281L370.74 60.08Z" })
    ]
  }
));
PenPaintbrushDuotone.displayName = "PenPaintbrushDuotone";
var PenPaintbrush_default = PenPaintbrushDuotone;
