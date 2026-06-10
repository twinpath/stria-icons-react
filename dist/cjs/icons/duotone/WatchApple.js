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
var WatchApple_exports = {};
__export(WatchApple_exports, {
  default: () => WatchApple_default
});
module.exports = __toCommonJS(WatchApple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WatchAppleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 80.001H64C28.625 80.001 0 108.626 0 144.001V368.001C0 403.376 28.625 432.001 64 432.001H320C355.375 432.001 384 403.376 384 368.001V144.001C384 108.626 355.375 80.001 320 80.001ZM232 160.001C245.254 160.001 256 170.743 256 184.001C256 197.254 245.254 208.001 232 208.001S208 197.254 208 184.001C208 170.743 218.746 160.001 232 160.001ZM152 160.001C165.254 160.001 176 170.743 176 184.001C176 197.254 165.254 208.001 152 208.001S128 197.254 128 184.001C128 170.743 138.746 160.001 152 160.001ZM96 256.001C96 242.743 106.746 232.001 120 232.001S144 242.743 144 256.001C144 269.254 133.254 280.001 120 280.001S96 269.254 96 256.001ZM152 352.001C138.746 352.001 128 341.254 128 328.001C128 314.743 138.746 304.001 152 304.001S176 314.743 176 328.001C176 341.254 165.254 352.001 152 352.001ZM160 256.001C160 238.329 174.326 224.001 192 224.001S224 238.329 224 256.001S209.674 288.001 192 288.001S160 273.672 160 256.001ZM232 352.001C218.746 352.001 208 341.254 208 328.001C208 314.743 218.746 304.001 232 304.001S256 314.743 256 328.001C256 341.254 245.254 352.001 232 352.001ZM264 280.001C250.746 280.001 240 269.254 240 256.001C240 242.743 250.746 232.001 264 232.001S288 242.743 288 256.001C288 269.254 277.254 280.001 264 280.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M152 160.001C165.254 160.001 176 170.743 176 184.001C176 197.254 165.254 208.001 152 208.001S128 197.254 128 184.001C128 170.743 138.746 160.001 152 160.001ZM152 352.001C138.746 352.001 128 341.254 128 328.001C128 314.743 138.746 304.001 152 304.001S176 314.743 176 328.001C176 341.254 165.254 352.001 152 352.001ZM264 280.001C250.746 280.001 240 269.254 240 256.001C240 242.743 250.746 232.001 264 232.001S288 242.743 288 256.001C288 269.254 277.254 280.001 264 280.001ZM288 0H96C78.375 0 64 14.375 64 32V80H320V32C320 14.375 305.625 0 288 0ZM64 480C64 497.625 78.375 512 96 512H288C305.625 512 320 497.625 320 480V432H64V480Z" })
    ]
  }
));
WatchAppleDuotone.displayName = "WatchAppleDuotone";
var WatchApple_default = WatchAppleDuotone;
