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
var Stopwatch_exports = {};
__export(Stopwatch_exports, {
  default: () => Stopwatch_default
});
module.exports = __toCommonJS(Stopwatch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StopwatchDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 96C109.125 96 16 189.125 16 304S109.125 512 224 512S432 418.875 432 304S338.875 96 224 96ZM248 328C248 341.25 237.25 352 224 352S200 341.25 200 328V216C200 202.75 210.75 192 224 192S248 202.75 248 216V328Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224.002 192C210.752 192 200.002 202.75 200.002 216V328C200.002 341.25 210.752 352 224.002 352S248.002 341.25 248.002 328V216C248.002 202.75 237.252 192 224.002 192ZM425.686 163.723C431.936 157.477 431.937 147.344 425.687 141.094L403.004 118.406C396.754 112.156 386.625 112.156 380.375 118.406L355.723 143.062C372.795 157.051 387.463 173.781 399.369 192.461C399.049 191.965 398.826 191.402 398.502 190.906L399.096 190.297L425.686 163.723ZM272.003 0H176.001C158.4 0 144 14.4 144 32.001V32.001C144 49.6 158.4 64 175.999 64H191.984V98.711C202.441 97.094 213.074 96 223.986 96C234.896 96 245.527 97.094 255.984 98.711V64H272.003C289.602 64 304.002 49.6 304.002 32.001V31.999C304.002 14.4 289.602 0 272.003 0Z" })
    ]
  }
));
StopwatchDuotone.displayName = "StopwatchDuotone";
var Stopwatch_default = StopwatchDuotone;
