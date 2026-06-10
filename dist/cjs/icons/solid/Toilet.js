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
var Toilet_exports = {};
__export(Toilet_exports, {
  default: () => Toilet_default
});
module.exports = __toCommonJS(Toilet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToiletSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 48C440.75 48 448 40.75 448 32V16C448 7.25 440.75 0 432 0H16C7.25 0 0 7.25 0 16V32C0 40.75 7.25 48 16 48H32V206.738C11.816 221.152 0 237.965 0 256C0 316.984 33.275 371.217 84.998 406.389L65.406 470.75C59.156 491.25 74.531 512 96.031 512H351.969C373.469 512 388.844 491.25 382.594 470.75L363.002 406.389C414.725 371.217 448 316.984 448 256C448 237.965 436.184 221.152 416 206.738V48H432ZM96 72C96 67.625 99.625 64 104 64H152C156.375 64 160 67.625 160 72V88C160 92.375 156.375 96 152 96H104C99.625 96 96 92.375 96 88V72ZM224 288C135.635 288 64 273.672 64 256C64 238.326 135.635 224 224 224S384 238.326 384 256C384 273.672 312.365 288 224 288Z" })
  }
));
ToiletSolid.displayName = "ToiletSolid";
var Toilet_default = ToiletSolid;
