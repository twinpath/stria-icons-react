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
var Peach_exports = {};
__export(Peach_exports, {
  default: () => Peach_default
});
module.exports = __toCommonJS(Peach_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PeachThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M122.375 94.219C125.656 91.25 125.906 86.187 122.938 82.922C110.719 69.469 104 52.344 104 34.672V16H176C215.688 16 248 48.297 248 88V95.828C248 100.25 251.594 103.828 256 103.828S264 100.25 264 95.828V88C264 48.297 296.312 16 336 16H408V34.672C408 52.344 401.281 69.469 389.062 82.922C386.094 86.188 386.344 91.25 389.625 94.219C391.156 95.609 393.094 96.297 395 96.297C397.188 96.297 399.344 95.406 400.938 93.672C415.812 77.281 424 56.328 424 34.672V8C424 3.578 420.406 0 416 0H336C300.406 0 269.852 21.34 256.002 51.803C242.156 21.332 211.598 0 176 0H96C91.594 0 88 3.578 88 8V34.672C88 56.328 96.188 77.281 111.062 93.672C114.031 96.906 119.062 97.188 122.375 94.219ZM336 112C308.875 112 280.625 118.688 255.969 130.891C230.971 118.623 203.67 112.154 176.711 112.043C176.682 112.041 176.654 112.033 176.625 112.031C176.619 112.031 176.615 112.037 176.609 112.037C176.406 112.037 176.203 112 176 112C81.781 112 8 182.984 8 273.594C8 382.797 135.281 473.531 253.562 511.609C254.344 511.875 255.188 512 256 512S257.656 511.875 258.438 511.609C380.688 472.234 504 383.375 504 273.594C504 182.984 430.219 112 336 112ZM256 495.594C119.281 450.844 24 359.797 24 273.594C24 192.025 90.67 128.133 175.783 128.02C252.262 134.303 328 182.762 328 253.562C328 257.984 331.594 261.562 336 261.562S344 257.984 344 253.562C344 209.451 317.09 168.49 271.73 141.551C292.068 132.918 314.371 128 336 128C421.219 128 488 191.953 488 273.594C488 359.781 392.719 450.828 256 495.594Z" })
  }
));
PeachThin.displayName = "PeachThin";
var Peach_default = PeachThin;
