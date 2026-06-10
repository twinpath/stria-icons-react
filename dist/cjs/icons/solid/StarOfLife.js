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
var StarOfLife_exports = {};
__export(StarOfLife_exports, {
  default: () => StarOfLife_default
});
module.exports = __toCommonJS(StarOfLife_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarOfLifeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M490.176 363.215L466.148 404.785C459.513 416.264 444.818 420.197 433.326 413.568L304.257 339.137V488C304.257 501.254 293.498 512 280.228 512H232.172C218.901 512 208.144 501.254 208.144 488V339.137L79.075 413.568C67.583 420.197 52.886 416.264 46.251 404.785L22.223 363.215C15.588 351.736 19.526 337.059 31.018 330.432L160.09 256L31.018 181.568C19.526 174.941 15.588 160.264 22.223 148.785L46.251 107.215C52.886 95.736 67.583 91.803 79.075 98.432L208.144 172.863V24C208.144 10.746 218.901 0 232.172 0H280.228C293.498 0 304.257 10.746 304.257 24V172.863L433.326 98.432C444.818 91.803 459.513 95.736 466.148 107.215L490.176 148.785C496.813 160.264 492.874 174.941 481.382 181.568L352.311 256L481.382 330.432C492.874 337.059 496.813 351.736 490.176 363.215Z" })
  }
));
StarOfLifeSolid.displayName = "StarOfLifeSolid";
var StarOfLife_default = StarOfLifeSolid;
