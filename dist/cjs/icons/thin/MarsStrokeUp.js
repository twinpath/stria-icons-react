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
var MarsStrokeUp_exports = {};
__export(MarsStrokeUp_exports, {
  default: () => MarsStrokeUp_default
});
module.exports = __toCommonJS(MarsStrokeUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarsStrokeUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M316.453 209.203C284.125 176.875 242.335 159.953 200 158.039V133.656H259.882C262.093 133.656 264.093 132.762 265.539 131.313C266.984 129.867 267.882 127.867 267.882 125.656C267.882 121.234 264.3 117.656 259.882 117.656H200V24.969L274.337 91.313C277.466 94.437 282.525 94.437 285.654 91.313S288.783 83.125 285.654 80L197.656 0C194.531 -3.125 189.468 -3.125 186.343 0L98.347 80C95.218 83.125 95.218 88.188 98.347 91.313S106.535 94.437 109.664 91.313L184 24.969V117.656H124.117C119.699 117.656 116.117 121.234 116.117 125.656S119.699 133.656 124.117 133.656H184V158.039C141.664 159.953 99.878 176.875 67.546 209.203C-1.18 277.938 -1.184 389.375 67.546 458.109C136.281 526.84 247.718 526.836 316.453 458.109C385.183 389.375 385.183 277.938 316.453 209.203ZM305.136 446.793C242.75 509.18 141.246 509.176 78.863 446.793S16.476 282.902 78.863 220.52C141.25 158.133 242.753 158.137 305.136 220.52S367.523 384.406 305.136 446.793Z" })
  }
));
MarsStrokeUpThin.displayName = "MarsStrokeUpThin";
var MarsStrokeUp_default = MarsStrokeUpThin;
