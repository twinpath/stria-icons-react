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
var MugHot_exports = {};
__export(MugHot_exports, {
  default: () => MugHot_default
});
module.exports = __toCommonJS(MugHot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MugHotSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 192H32C14.25 192 0 206.25 0 224V416C0 469 43 512 96 512H288C341 512 384 469 384 416H400C461.75 416 512 365.75 512 304S461.75 192 400 192ZM400 352H384V256H400C426.5 256 448 277.5 448 304S426.5 352 400 352ZM107.906 100.734C120.297 107.969 128 121.375 128 136C128 149.25 138.75 159.859 152 159.859S176 148.969 176 135.719C176 104.375 159.172 75.078 132.094 59.266C119.703 52.031 112 38.625 112 24.281V24C112 10.75 101.25 0.141 88 0.141S64 11.031 64 24.281C64 55.625 80.828 84.922 107.906 100.734ZM219.906 100.734C232.297 107.969 240 121.375 240 136C240 149.25 250.75 159.859 264 159.859S288 148.969 288 135.719C288 104.375 271.172 75.078 244.094 59.266C231.703 52.031 224 38.625 224 24.281V24C224 10.75 213.25 0.141 200 0.141S176 11.031 176 24.281C176 55.625 192.828 84.922 219.906 100.734Z" })
  }
));
MugHotSolid.displayName = "MugHotSolid";
var MugHot_default = MugHotSolid;
