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
var HourglassEnd_exports = {};
__export(HourglassEnd_exports, {
  default: () => HourglassEnd_default
});
module.exports = __toCommonJS(HourglassEnd_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HourglassEndSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 448V426.664C352 398.969 343.018 372.023 326.4 349.867L256 256L326.4 162.133C343.018 139.977 352 113.027 352 85.332V64C369.674 64 384 49.672 384 32C384 14.326 369.674 0 352 0H32C14.326 0 0 14.326 0 32C0 49.672 14.326 64 32 64V85.332C32 113.027 40.982 139.977 57.6 162.133L128 256L57.6 349.867C40.982 372.023 32 398.969 32 426.664V448C14.326 448 0 462.326 0 480C0 497.672 14.326 512 32 512H352C369.674 512 384 497.672 384 480C384 462.326 369.674 448 352 448ZM108.799 123.734C100.545 112.727 96 99.09 96 85.332V64H288V85.332C288 99.09 283.455 112.727 275.201 123.734L192 234.668L108.799 123.734Z" })
  }
));
HourglassEndSolid.displayName = "HourglassEndSolid";
var HourglassEnd_default = HourglassEndSolid;
