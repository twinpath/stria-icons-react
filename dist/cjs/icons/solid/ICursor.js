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
var ICursor_exports = {};
__export(ICursor_exports, {
  default: () => ICursor_default
});
module.exports = __toCommonJS(ICursor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ICursorSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 480C256 497.688 241.672 512 224 512C185.59 512 151.48 494.646 128 467.77C104.52 494.646 70.41 512 32 512C14.328 512 0 497.688 0 480S14.328 448 32 448C67.297 448 96 419.281 96 384V288H64C46.328 288 32 273.688 32 256S46.328 224 64 224H96V128C96 92.719 67.297 64 32 64C14.328 64 0 49.688 0 32S14.328 0 32 0C70.41 0 104.52 17.354 128 44.23C151.48 17.354 185.59 0 224 0C241.672 0 256 14.312 256 32S241.672 64 224 64C188.703 64 160 92.719 160 128V224H192C209.672 224 224 238.312 224 256S209.672 288 192 288H160V384C160 419.281 188.703 448 224 448C241.672 448 256 462.312 256 480Z" })
  }
));
ICursorSolid.displayName = "ICursorSolid";
var ICursor_default = ICursorSolid;
