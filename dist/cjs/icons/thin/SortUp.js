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
var SortUp_exports = {};
__export(SortUp_exports, {
  default: () => SortUp_default
});
module.exports = __toCommonJS(SortUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SortUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M27.658 224H292.342C316.945 224 329.229 194.225 311.881 176.877L179.553 40.107C174.146 34.701 167.08 32 160.027 32C152.973 32 145.934 34.701 140.582 40.107L8.119 176.877C-9.229 194.225 3.055 224 27.658 224ZM19.611 188.008L151.953 51.363C154.1 49.193 156.969 48 160.027 48C163.117 48 166.033 49.215 168.055 51.232L300.566 188.189C305.498 193.121 303.951 198.672 303.057 200.83C302.164 202.986 299.332 208 292.342 208H27.658C20.668 208 17.836 202.986 16.943 200.83C16.049 198.672 14.502 193.121 19.611 188.008Z" })
  }
));
SortUpThin.displayName = "SortUpThin";
var SortUp_default = SortUpThin;
