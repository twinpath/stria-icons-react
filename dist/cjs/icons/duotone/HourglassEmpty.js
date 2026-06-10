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
var HourglassEmpty_exports = {};
__export(HourglassEmpty_exports, {
  default: () => HourglassEmpty_default
});
module.exports = __toCommonJS(HourglassEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HourglassEmptyDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 64H352V85.332C352 113.027 343.018 139.977 326.4 162.133L256 256L326.4 349.867C343.018 372.023 352 398.969 352 426.664V448H288V426.664C288 412.91 283.455 399.273 275.201 388.266L192 277.332L108.799 388.266C100.545 399.273 96 412.91 96 426.664V448H32V426.664C32 398.969 40.982 372.023 57.6 349.867L128 256L57.6 162.133C40.982 139.977 32 113.027 32 85.332V64H96V85.332C96 99.09 100.545 112.727 108.799 123.734L192 234.668L275.201 123.734C283.455 112.727 288 99.09 288 85.332V64Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 64H352C369.674 64 384 49.672 384 32C384 14.326 369.674 0 352 0H32C14.326 0 0 14.326 0 32C0 49.672 14.326 64 32 64ZM352 448H32C14.326 448 0 462.326 0 480C0 497.672 14.326 512 32 512H352C369.674 512 384 497.672 384 480C384 462.326 369.674 448 352 448Z" })
    ]
  }
));
HourglassEmptyDuotone.displayName = "HourglassEmptyDuotone";
var HourglassEmpty_default = HourglassEmptyDuotone;
