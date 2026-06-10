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
var PaintBrushFine_exports = {};
__export(PaintBrushFine_exports, {
  default: () => PaintBrushFine_default
});
module.exports = __toCommonJS(PaintBrushFine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaintBrushFineDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M559.875 16.406C538 -5.469 502.563 -5.469 480.688 16.406L228 269.094L307.188 348.281L559.875 95.594C581.75 73.719 581.75 38.281 559.875 16.406Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M203.564 290.189C197.248 288.967 190.857 288.008 184.277 288C184.246 288 184.246 288 184.246 288C156.434 288 130.277 298.873 110.684 318.609C88.309 341.121 78.4 371.508 80.973 400.998C83.223 426.824 64 448 32 448C14.326 448 0 462.326 0 480C0 497.672 14.326 512 32 512C32 512 60.125 512 85.715 512C140.246 512 218.715 504.432 257.809 465.08C282.85 439.85 291.811 404.812 285.564 372.189L203.564 290.189Z" })
    ]
  }
));
PaintBrushFineDuotone.displayName = "PaintBrushFineDuotone";
var PaintBrushFine_default = PaintBrushFineDuotone;
