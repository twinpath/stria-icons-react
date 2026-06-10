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
var PhoneFlip_exports = {};
__export(PhoneFlip_exports, {
  default: () => PhoneFlip_default
});
module.exports = __toCommonJS(PhoneFlip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneFlipThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M487.782 24.047L386.999 0.797C372.405 -2.578 357.249 5 351.249 18.906L304.749 127.391C299.217 140.172 302.936 155.187 313.717 163.875L367.53 207.922C333.53 277.172 277.249 333.469 208.028 367.453L163.934 313.625C155.153 302.875 140.278 299.203 127.497 304.641L18.932 351.172C5.026 357.266 -2.599 372.344 0.807 387.031L24.057 487.781C27.307 502.031 39.84 512 54.497 512C306.78 512 512.001 306.766 512.001 54.516C512.001 39.844 502.032 27.312 487.782 24.047ZM54.497 496C47.34 496 41.247 491.141 39.622 484.188L16.37 383.438C14.714 376.234 18.495 368.828 25.307 365.859L133.809 319.344C140.051 316.684 147.305 318.557 151.559 323.75L203.559 387.281C337.046 324.963 380.29 218.625 387.342 203.469L323.811 151.453C318.561 147.234 316.749 139.938 319.436 133.719L365.936 25.234C368.874 18.453 376.28 14.75 383.405 16.391L484.188 39.641C491.126 41.234 496.001 47.359 496.001 54.516C496.001 297.953 297.936 496 54.497 496Z" })
  }
));
PhoneFlipThin.displayName = "PhoneFlipThin";
var PhoneFlip_default = PhoneFlipThin;
