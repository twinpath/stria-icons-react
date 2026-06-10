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
const PhoneFlipDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208.141 367.454L180.991 334.31L5 404.706L14.786 447.118L208.141 367.454ZM447.237 14.668L404.823 4.884L334.468 180.767L367.618 207.904L447.237 14.668Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M180.877 334.31L163.934 313.627C155.152 302.878 140.278 299.203 127.495 304.639L18.934 351.172C5.025 357.266 -2.598 372.344 0.807 387.032L4.886 404.706L180.877 334.31ZM487.782 24.047L447.123 14.668L367.505 207.904L367.53 207.924C333.53 277.172 277.249 333.469 208.027 367.454L14.672 447.118L24.057 487.782C27.308 502.032 39.84 512 54.495 512C306.779 512 512.001 306.766 512 54.517C512.001 39.846 502.033 27.314 487.782 24.047ZM334.354 180.767L404.709 4.884L386.998 0.797C372.405 -2.576 357.249 4.999 351.25 18.907L304.747 127.391C299.217 140.171 302.936 155.188 313.717 163.875L334.354 180.767Z" })
    ]
  }
));
PhoneFlipDuotone.displayName = "PhoneFlipDuotone";
var PhoneFlip_default = PhoneFlipDuotone;
