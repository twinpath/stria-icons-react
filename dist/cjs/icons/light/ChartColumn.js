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
var ChartColumn_exports = {};
__export(ChartColumn_exports, {
  default: () => ChartColumn_default
});
module.exports = __toCommonJS(ChartColumn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartColumnLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 448H80C53.531 448 32 426.469 32 400V48C32 39.156 24.844 32 16 32S0 39.156 0 48V400C0 444.125 35.875 480 80 480H496C504.844 480 512 472.844 512 464S504.844 448 496 448ZM160 368C168.844 368 176 360.844 176 352V256C176 247.156 168.844 240 160 240S144 247.156 144 256V352C144 360.844 151.156 368 160 368ZM256 368C264.844 368 272 360.844 272 352V128C272 119.156 264.844 112 256 112S240 119.156 240 128V352C240 360.844 247.156 368 256 368ZM352 368C360.844 368 368 360.844 368 352V192C368 183.156 360.844 176 352 176S336 183.156 336 192V352C336 360.844 343.156 368 352 368ZM448 368C456.844 368 464 360.844 464 352V96C464 87.156 456.844 80 448 80S432 87.156 432 96V352C432 360.844 439.156 368 448 368Z" })
  }
));
ChartColumnLight.displayName = "ChartColumnLight";
var ChartColumn_default = ChartColumnLight;
