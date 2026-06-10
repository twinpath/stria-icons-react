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
var Marker_exports = {};
__export(Marker_exports, {
  default: () => Marker_default
});
module.exports = __toCommonJS(Marker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarkerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M421.397 0C398.274 0 375.149 8.875 357.399 26.5L315.272 68.646L289.938 43.312C271.251 24.594 240.751 24.594 222.063 43.312L116.688 148.688C110.438 154.938 110.438 165.063 116.688 171.312C119.813 174.438 123.907 176 128.001 176S136.188 174.438 139.313 171.312L244.688 65.937C250.938 59.687 261.063 59.687 267.313 65.937L292.653 91.277L94.028 290C41.53 342.5 8.405 411.375 0.155 485.125V485.375C-1.47 499.75 9.905 512 24.03 512C24.905 512 25.78 512 26.655 511.875C100.528 503.625 169.403 470.625 221.901 418L485.397 154.5C542.52 97.375 501.397 0 421.397 0ZM199.247 395.4C154.782 439.973 96.483 469.275 33.241 478.744C42.434 416.127 71.823 357.461 116.661 312.621L187.311 241.936L270.01 324.635L199.247 395.4ZM462.77 131.873L292.635 302.01L209.93 219.305L379.946 49.207C391.122 38.111 405.842 32 421.397 32C450.089 32 468.081 50.754 475.35 68.307C484.702 90.881 479.999 114.643 462.77 131.873Z" })
  }
));
MarkerLight.displayName = "MarkerLight";
var Marker_default = MarkerLight;
