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
var PenClipSlash_exports = {};
__export(PenClipSlash_exports, {
  default: () => PenClipSlash_default
});
module.exports = __toCommonJS(PenClipSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenClipSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M308.687 65.938C314.937 59.688 325.062 59.688 331.312 65.938L356.651 91.277L294.026 153.934L319.335 173.914L379.304 113.93L462.046 196.672L411.792 246.908L437.089 266.879L557.251 146.771C582.247 121.779 582.249 81.254 557.257 56.26L519.745 18.746C507.255 6.254 490.88 0.004 474.509 0H474.47C458.093 0.004 441.722 6.252 429.23 18.748L379.271 68.646L353.937 43.313C335.249 24.594 304.749 24.594 286.062 43.313L227.759 101.615L253.046 121.578L308.687 65.938ZM451.859 41.373C464.355 28.873 484.601 28.854 497.118 41.371L534.628 78.885C547.126 91.387 547.14 111.621 534.626 124.143L484.679 174.055L401.929 91.305L451.859 41.373ZM263.245 395.4C218.78 439.973 160.482 469.275 97.239 478.744C106.433 416.127 135.821 357.461 180.659 312.621L228.2 265.068L202.905 245.098L158.026 290C105.528 342.5 72.403 411.375 64.153 485.125V485.375C62.528 499.75 73.903 512 88.028 512C88.903 512 89.778 512 90.653 511.875C164.526 503.625 233.401 470.625 285.9 418L345.919 358.008L320.628 338.039L263.245 395.4ZM633.921 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.077 508.562C617.015 510.875 620.515 512 623.984 512C628.718 512 633.405 509.906 636.562 505.922C642.03 498.984 640.843 488.92 633.921 483.436Z" })
  }
));
PenClipSlashLight.displayName = "PenClipSlashLight";
var PenClipSlash_default = PenClipSlashLight;
