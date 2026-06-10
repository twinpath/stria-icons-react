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
var Brush_exports = {};
__export(Brush_exports, {
  default: () => Brush_default
});
module.exports = __toCommonJS(Brush_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BrushLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 0H64C28.801 0 0 28.801 0 64V288C0 341.02 42.98 384 96 384H128V444.662C128 476.539 149.82 506.047 181.287 511.133C221.41 517.617 256 486.887 256 448V384H288C341.02 384 384 341.02 384 288V64C384 28.801 355.199 0 320 0ZM288 352H224V448C224 465.625 209.625 480 192 480S160 465.625 160 448V352H96C60.801 352 32 323.199 32 288H352C352 323.199 323.199 352 288 352ZM352 256H32V64C32 46.326 46.326 32 64 32H96V144C96 152.836 103.164 160 112 160S128 152.836 128 144V32H192V112C192 120.836 199.164 128 208 128S224 120.836 224 112V32H320C337.674 32 352 46.326 352 64V256Z" })
  }
));
BrushLight.displayName = "BrushLight";
var Brush_default = BrushLight;
