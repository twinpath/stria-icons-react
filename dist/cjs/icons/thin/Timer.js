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
var Timer_exports = {};
__export(Timer_exports, {
  default: () => Timer_default
});
module.exports = __toCommonJS(Timer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TimerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C251.594 16 248 19.594 248 24V128C248 132.406 251.594 136 256 136S264 132.406 264 128V32.156C383.812 36.375 480 135.156 480 256C480 379.5 379.5 480 256 480S32 379.5 32 256C32 202.438 51.188 150.594 86.062 110.062C88.938 106.719 88.562 101.656 85.219 98.781C81.906 95.875 76.844 96.281 73.937 99.625C36.562 143.062 16 198.594 16 256C16 388.344 123.656 496 256 496S496 388.344 496 256S388.344 16 256 16ZM267.312 278.625C268.875 280.187 270.906 280.969 272.969 280.969S277.062 280.187 278.625 278.625C281.75 275.5 281.75 270.437 278.625 267.312L165.656 154.344C162.531 151.219 157.469 151.219 154.344 154.344S151.219 162.531 154.344 165.656L267.312 278.625Z" })
  }
));
TimerThin.displayName = "TimerThin";
var Timer_default = TimerThin;
