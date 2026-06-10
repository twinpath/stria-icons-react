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
var LariSign_exports = {};
__export(LariSign_exports, {
  default: () => LariSign_default
});
module.exports = __toCommonJS(LariSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LariSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 456C384 469.25 373.25 480 360 480H24C10.75 480 0 469.25 0 456S10.75 432 24 432H65.424C25.414 396.789 0 345.365 0 288C0 207.594 49.727 138.686 120 110.135V56C120 42.75 130.75 32 144 32S168 42.75 168 56V97.666C175.881 96.678 183.855 96 192 96C200.162 96 208.07 97.117 216 98.121V56C216 42.75 226.75 32 240 32S264 42.75 264 56V110.525C322.732 134.422 367.951 186.264 380.516 251.469C383.031 264.469 374.516 277.063 361.5 279.563C348.609 282.219 335.875 273.594 333.391 260.531C325.279 218.5 299.162 183.682 264 163.354V264C264 277.25 253.25 288 240 288S216 277.25 216 264V146.121C208.164 144.797 200.162 144 192 144C183.781 144 175.846 145.098 168 146.426V264C168 277.25 157.25 288 144 288S120 277.25 120 264V164.029C77.17 189.01 48 234.939 48 288C48 367.406 112.594 432 192 432H360C373.25 432 384 442.75 384 456Z" })
  }
));
LariSignRegular.displayName = "LariSignRegular";
var LariSign_default = LariSignRegular;
