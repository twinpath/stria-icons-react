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
const WatchAppleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 32C320 14.375 305.625 0 288 0H96C78.375 0 64 14.375 64 32V48H320V32ZM320 80H64C28.625 80 0 108.625 0 144V368C0 403.375 28.625 432 64 432H320C355.375 432 384 403.375 384 368V144C384 108.625 355.375 80 320 80ZM232 160C245.254 160 256 170.742 256 184C256 197.254 245.254 208 232 208S208 197.254 208 184C208 170.742 218.746 160 232 160ZM152 160C165.254 160 176 170.742 176 184C176 197.254 165.254 208 152 208S128 197.254 128 184C128 170.742 138.746 160 152 160ZM96 256C96 242.742 106.746 232 120 232S144 242.742 144 256C144 269.254 133.254 280 120 280S96 269.254 96 256ZM152 352C138.746 352 128 341.254 128 328C128 314.742 138.746 304 152 304S176 314.742 176 328C176 341.254 165.254 352 152 352ZM160 256C160 238.328 174.326 224 192 224S224 238.328 224 256S209.674 288 192 288S160 273.672 160 256ZM232 352C218.746 352 208 341.254 208 328C208 314.742 218.746 304 232 304S256 314.742 256 328C256 341.254 245.254 352 232 352ZM264 280C250.746 280 240 269.254 240 256C240 242.742 250.746 232 264 232S288 242.742 288 256C288 269.254 277.254 280 264 280ZM64 480C64 497.625 78.375 512 96 512H288C305.625 512 320 497.625 320 480V464H64V480Z" })
  }
));
WatchAppleSolid.displayName = "WatchAppleSolid";
var WatchApple_default = WatchAppleSolid;
