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
var EllipsisStroke_exports = {};
__export(EllipsisStroke_exports, {
  default: () => EllipsisStroke_default
});
module.exports = __toCommonJS(EllipsisStroke_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EllipsisStrokeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 192C220.654 192 192 220.654 192 256S220.654 320 256 320S320 291.346 320 256S291.346 192 256 192ZM256 288C238.355 288 224 273.645 224 256S238.355 224 256 224S288 238.355 288 256S273.645 288 256 288ZM448 192C412.654 192 384 220.654 384 256S412.654 320 448 320S512 291.346 512 256S483.346 192 448 192ZM448 288C430.355 288 416 273.645 416 256S430.355 224 448 224S480 238.355 480 256S465.645 288 448 288ZM64 192C28.654 192 0 220.654 0 256S28.654 320 64 320S128 291.346 128 256S99.346 192 64 192ZM64 288C46.355 288 32 273.645 32 256S46.355 224 64 224S96 238.355 96 256S81.645 288 64 288Z" })
  }
));
EllipsisStrokeLight.displayName = "EllipsisStrokeLight";
var EllipsisStroke_default = EllipsisStrokeLight;
