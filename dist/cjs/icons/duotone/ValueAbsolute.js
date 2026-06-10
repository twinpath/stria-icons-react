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
var ValueAbsolute_exports = {};
__export(ValueAbsolute_exports, {
  default: () => ValueAbsolute_default
});
module.exports = __toCommonJS(ValueAbsolute_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ValueAbsoluteDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 32C17.908 32 0 49.908 0 72V440C0 462.092 17.908 480 40 480S80 462.092 80 440V72C80 49.908 62.092 32 40 32ZM472 32C449.908 32 432 49.908 432 72V440C432 462.092 449.908 480 472 480S512 462.092 512 440V72C512 49.908 494.092 32 472 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M374.625 182.625L301.25 256L374.625 329.375C387.125 341.875 387.125 362.125 374.625 374.625C368.375 380.875 360.187 384 352 384S335.625 380.875 329.375 374.625L256 301.25L182.625 374.625C176.375 380.875 168.187 384 160 384S143.625 380.875 137.375 374.625C124.875 362.125 124.875 341.875 137.375 329.375L210.75 256L137.375 182.625C124.875 170.125 124.875 149.875 137.375 137.375S170.125 124.875 182.625 137.375L256 210.75L329.375 137.375C341.875 124.875 362.125 124.875 374.625 137.375S387.125 170.125 374.625 182.625Z" })
    ]
  }
));
ValueAbsoluteDuotone.displayName = "ValueAbsoluteDuotone";
var ValueAbsolute_default = ValueAbsoluteDuotone;
