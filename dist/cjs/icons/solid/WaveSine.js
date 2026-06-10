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
var WaveSine_exports = {};
__export(WaveSine_exports, {
  default: () => WaveSine_default
});
module.exports = __toCommonJS(WaveSine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WaveSineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M638.641 297.188C633.017 315.906 580.441 480 463.993 480C346.404 480 294.485 285.906 288.954 263.75C275.189 209.031 229.457 96 176.006 96C117.087 96 73.339 197.594 62.667 233.188C57.574 250.125 39.746 259.719 22.825 254.656C5.889 249.562 -3.72 231.719 1.357 214.812C6.982 196.094 59.558 32 176.006 32C293.594 32 345.514 226.094 351.045 248.25C364.81 302.969 410.542 416 463.993 416C522.912 416 566.66 314.406 577.332 278.812C582.441 261.875 600.299 252.375 617.174 257.344C634.11 262.438 643.719 280.281 638.641 297.188Z" })
  }
));
WaveSineSolid.displayName = "WaveSineSolid";
var WaveSine_default = WaveSineSolid;
