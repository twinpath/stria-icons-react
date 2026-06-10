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
var SprayCan_exports = {};
__export(SprayCan_exports, {
  default: () => SprayCan_default
});
module.exports = __toCommonJS(SprayCan_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SprayCanDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 256C115.875 256 80 291.875 80 336S115.875 416 160 416S240 380.125 240 336S204.125 256 160 256ZM480 96C497.625 96 512 81.625 512 64S497.625 32 480 32S448 46.375 448 64S462.375 96 480 96ZM288 32C270.375 32 256 46.375 256 64S270.375 96 288 96S320 81.625 320 64S305.625 32 288 32ZM480 128C462.375 128 448 142.375 448 160S462.375 192 480 192S512 177.625 512 160S497.625 128 480 128ZM384 128C366.375 128 352 142.375 352 160S366.375 192 384 192S416 177.625 416 160S401.625 128 384 128ZM480 224C462.375 224 448 238.375 448 256S462.375 288 480 288S512 273.625 512 256S497.625 224 480 224ZM384 32C366.375 32 352 46.375 352 64S366.375 96 384 96S416 81.625 416 64S401.625 32 384 32ZM192 128H128V160H192V128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 32C224 14.375 209.625 0 192 0H128C110.375 0 96 14.375 96 32V128H224V32ZM224 160H96C43 160 0 203 0 256V480C0 497.625 14.375 512 32 512H288C305.625 512 320 497.625 320 480V256C320 203 277 160 224 160ZM160 416C115.875 416 80 380.125 80 336S115.875 256 160 256S240 291.875 240 336S204.125 416 160 416Z" })
    ]
  }
));
SprayCanDuotone.displayName = "SprayCanDuotone";
var SprayCan_default = SprayCanDuotone;
