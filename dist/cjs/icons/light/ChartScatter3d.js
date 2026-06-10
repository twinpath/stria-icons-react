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
var ChartScatter3d_exports = {};
__export(ChartScatter3d_exports, {
  default: () => ChartScatter3d_default
});
module.exports = __toCommonJS(ChartScatter3d_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartScatter3dLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 280.58V48C272 39.156 264.844 32 256 32S240 39.156 240 48V280.58L37.672 451.781C30.922 457.5 30.078 467.594 35.781 474.328C41.484 481.078 51.563 481.922 58.328 476.219L256 308.953L453.672 476.219C456.672 478.75 460.344 480 463.984 480C468.531 480 473.047 478.078 476.219 474.328C481.922 467.594 481.078 457.5 474.328 451.781L272 280.58ZM32 96C49.674 96 64 81.674 64 64S49.674 32 32 32S0 46.326 0 64S14.326 96 32 96ZM64 256C64 238.326 49.674 224 32 224S0 238.326 0 256S14.326 288 32 288S64 273.674 64 256ZM128 192C145.674 192 160 177.674 160 160S145.674 128 128 128S96 142.326 96 160S110.326 192 128 192ZM256 416C238.326 416 224 430.326 224 448S238.326 480 256 480S288 465.674 288 448S273.674 416 256 416ZM384 288C401.674 288 416 273.674 416 256S401.674 224 384 224S352 238.326 352 256S366.326 288 384 288ZM480 128C462.326 128 448 142.326 448 160S462.326 192 480 192S512 177.674 512 160S497.674 128 480 128ZM384 96C401.674 96 416 81.674 416 64S401.674 32 384 32S352 46.326 352 64S366.326 96 384 96Z" })
  }
));
ChartScatter3dLight.displayName = "ChartScatter3dLight";
var ChartScatter3d_default = ChartScatter3dLight;
