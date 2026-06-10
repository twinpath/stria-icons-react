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
var Pen_exports = {};
__export(Pen_exports, {
  default: () => Pen_default
});
module.exports = __toCommonJS(Pen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.256 56.262L455.744 18.748C443.248 6.252 426.868 0 410.489 0C394.106 0 377.729 6.25 365.229 18.75L45.114 338.885C36.545 347.451 30.586 358.275 27.928 370.094L0.319 492.854C-1.701 502.967 6.159 512 15.948 512C16.994 512 18.063 511.896 19.145 511.68C19.145 511.68 103.76 493.73 141.907 484.748C153.446 482.031 163.774 476.225 172.155 467.844C221.284 418.719 406.686 233.33 493.346 146.676C518.34 121.684 518.248 81.256 493.256 56.262ZM149.528 445.217C145.309 449.436 140.276 452.256 134.573 453.6C109.897 459.41 64.936 469.148 37.108 475.121L59.149 377.115C60.481 371.197 63.452 365.803 67.743 361.512L315.307 113.932L398.069 196.693L149.528 445.217ZM470.721 124.047L420.696 174.07L337.932 91.307L387.86 41.375C393.905 35.33 401.942 32 410.489 32S427.073 35.33 433.118 41.375L470.629 78.889C483.104 91.365 483.145 111.623 470.721 124.047Z" })
  }
));
PenLight.displayName = "PenLight";
var Pen_default = PenLight;
