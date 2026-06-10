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
const UtensilsDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M455.997 0C399.334 0 220.295 147.131 394.017 301.741L384.017 486.719C383.674 493.281 386.018 499.719 390.55 504.5C395.113 509.281 401.395 512 407.99 512H455.997C469.248 512 480 501.25 480 488V24C480 10.813 469.311 0 455.997 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.5 11.803C221.374 4.086 214.089 -1.133 205.929 0.211C197.987 1.273 192.078 8.054 192.078 16.053V160.038H174.539L159.969 14.459C159.156 6.273 152.278 0.055 144.055 0.055C135.832 0.055 128.954 6.273 128.141 14.459L113.572 160.038H96.032V16.053C96.032 8.054 90.123 1.273 82.182 0.211C74.115 -1.133 66.737 4.086 64.611 11.803L34.502 120.636C27.405 153.851 35.565 188.035 56.951 214.469C69.187 229.577 85.021 240.476 102.517 247.487L96.032 487.346C95.876 493.814 98.314 500.095 102.848 504.751C107.35 509.375 113.572 512 120.044 512H168.067C174.539 512 180.76 509.375 185.263 504.751C189.796 500.095 192.235 493.814 192.078 487.346L185.593 247.487C203.09 240.476 218.923 229.577 231.16 214.469C252.545 188.035 260.705 153.851 253.358 119.729L223.5 11.803Z" })
    ]
  }
));
UtensilsDuotone.displayName = "UtensilsDuotone";
var Utensils_default = UtensilsDuotone;
