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
var Rss_exports = {};
__export(Rss_exports, {
  default: () => Rss_default
});
module.exports = __toCommonJS(Rss_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RssSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M25.566 176.074C12.412 175.355 0.912 185.23 0.053 198.449S9.225 223.102 22.441 223.945C143.393 231.82 248.187 336.602 256.047 457.562C256.875 470.25 267.436 480 279.967 480C280.498 480 281.029 479.969 281.561 479.938C294.779 479.094 304.811 467.656 303.951 454.438C294.576 310.32 169.705 185.418 25.566 176.074ZM32 32C14.328 32 0 46.312 0 64S14.328 96 32 96C226.094 96 384 253.906 384 448C384 465.688 398.328 480 416 480S448 465.688 448 448C448 218.625 261.391 32 32 32ZM63.998 351.879C28.625 351.879 0 380.625 0 416S28.625 480 63.998 480S128.121 451.375 128.121 416S99.371 351.879 63.998 351.879Z" })
  }
));
RssSolid.displayName = "RssSolid";
var Rss_default = RssSolid;
