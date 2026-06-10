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
var Utensils_exports = {};
__export(Utensils_exports, {
  default: () => Utensils_default
});
module.exports = __toCommonJS(Utensils_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UtensilsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.417 11.803C221.292 4.086 214.01 -1.133 205.854 0.211C197.916 1.273 192.009 8.054 192.009 16.053V160.038H174.477L159.914 14.459C159.101 6.273 152.226 0.055 144.007 0.055C135.788 0.055 128.912 6.273 128.1 14.459L113.536 160.038H96.004V16.053C96.004 8.054 90.098 1.273 82.16 0.211C74.097 -1.133 66.722 4.086 64.596 11.803L34.501 120.636C27.407 153.851 35.564 188.035 56.94 214.469C69.171 229.577 84.998 240.476 102.487 247.487L96.004 487.346C95.848 493.814 98.286 500.095 102.817 504.751C107.317 509.375 113.536 512 120.005 512H168.008C174.477 512 180.696 509.375 185.196 504.751C189.728 500.095 192.165 493.814 192.009 487.346L185.526 247.487C203.016 240.476 218.843 229.577 231.074 214.469C252.45 188.035 260.606 153.851 253.262 119.729L223.417 11.803ZM455.999 0.057C399.342 0.057 220.319 147.172 394.025 301.765L384.026 486.721C383.683 493.283 386.026 499.72 390.558 504.501C395.121 509.282 401.402 512 407.996 512H455.999C469.249 512 480 501.251 480 488.003V24.054C480 10.868 469.312 0.057 455.999 0.057Z" })
  }
));
UtensilsSolid.displayName = "UtensilsSolid";
var Utensils_default = UtensilsSolid;
