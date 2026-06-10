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
var Angle90_exports = {};
__export(Angle90_exports, {
  default: () => Angle90_default
});
module.exports = __toCommonJS(Angle90_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Angle90Regular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M315.459 400H364.35C358.031 356.705 343.51 316.045 322.33 279.662L281.229 304.322C298.051 333.387 309.59 365.738 315.459 400ZM263.623 277.566L304.932 252.781C283.434 222.813 257.186 196.564 227.217 175.066L202.432 216.375C225.781 233.604 246.395 254.217 263.623 277.566ZM424 432H48V56C48 42.75 37.25 32 24 32S0 42.75 0 56V456C0 469.25 10.75 480 24 480H424C437.25 480 448 469.25 448 456S437.25 432 424 432ZM200.34 157.672C163.957 136.49 123.295 121.969 80 115.65V164.541C114.26 170.41 146.613 181.949 175.68 198.773L200.34 157.672Z" })
  }
));
Angle90Regular.displayName = "Angle90Regular";
var Angle90_default = Angle90Regular;
