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
var Sparkles_exports = {};
__export(Sparkles_exports, {
  default: () => Sparkles_default
});
module.exports = __toCommonJS(Sparkles_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SparklesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M324.375 103.125L384 128L408.875 187.625C410.25 190.25 413 192 416 192S421.75 190.25 423.125 187.625L448 128L507.625 103.125C510.25 101.75 512 99 512 96S510.25 90.25 507.625 88.875L448 64L423.125 4.375C421.75 1.75 419 0 416 0S410.25 1.75 408.875 4.375L384 64L324.375 88.875C321.75 90.25 320 93 320 96S321.75 101.75 324.375 103.125ZM507.625 408.875L448 384L423.125 324.375C421.75 321.75 419 320 416 320S410.25 321.75 408.875 324.375L384 384L324.375 408.875C321.75 410.25 320 413 320 416S321.75 421.75 324.375 423.125L384 448L408.875 507.625C410.25 510.25 413 512 416 512S421.75 510.25 423.125 507.625L448 448L507.625 423.125C510.25 421.75 512 419 512 416S510.25 410.25 507.625 408.875ZM384 256C384 246.875 378.875 238.625 370.75 234.5L265.875 182.125L213.5 77.25C205.375 61 178.625 61 170.5 77.25L118.125 182.125L13.25 234.5C5.125 238.625 0 246.875 0 256S5.125 273.375 13.25 277.5L118.125 329.875L170.5 434.75C174.625 442.875 182.875 448 192 448S209.375 442.875 213.5 434.75L265.875 329.875L370.75 277.5C378.875 273.375 384 265.125 384 256ZM237.25 290.5C232.625 292.875 228.875 296.625 226.5 301.25L192 370.375L157.5 301.25C155.125 296.625 151.375 292.875 146.75 290.5L77.625 256L146.75 221.5C151.375 219.125 155.125 215.375 157.5 210.75L192 141.625L226.5 210.75C228.875 215.375 232.625 219.125 237.25 221.5L306.375 256L237.25 290.5Z" })
  }
));
SparklesRegular.displayName = "SparklesRegular";
var Sparkles_default = SparklesRegular;
