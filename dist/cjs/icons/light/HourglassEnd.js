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
var HourglassEnd_exports = {};
__export(HourglassEnd_exports, {
  default: () => HourglassEnd_default
});
module.exports = __toCommonJS(HourglassEnd_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HourglassEndLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 432C32 440.844 39.156 448 48 448S64 440.844 64 432C64 404.5 73.094 377.219 89.594 355.188L156.797 265.594C161.063 259.906 161.063 252.094 156.797 246.406L89.594 156.812C73.094 134.781 64 107.5 64 80C64 71.156 56.844 64 48 64S32 71.156 32 80C32 114.375 43.359 148.469 64 176L124 256L64 336C43.359 363.531 32 397.625 32 432ZM16 32H368C376.844 32 384 24.844 384 16S376.844 0 368 0H16C7.156 0 0 7.156 0 16S7.156 32 16 32ZM352 80C352 71.156 344.844 64 336 64S320 71.156 320 80C320 107.5 310.906 134.781 294.406 156.812L227.203 246.406C222.937 252.094 222.937 259.906 227.203 265.594L294.406 355.188C310.906 377.219 320 404.5 320 432C320 440.844 327.156 448 336 448S352 440.844 352 432C352 397.625 340.641 363.531 320 336L260 256L320 176C340.641 148.469 352 114.375 352 80ZM368 480H16C7.156 480 0 487.156 0 496S7.156 512 16 512H368C376.844 512 384 504.844 384 496S376.844 480 368 480ZM112 448H272C280.844 448 288 440.844 288 432C288 397.281 275.766 363.5 253.562 336.875L204.297 277.75C198.203 270.5 185.797 270.5 179.703 277.75L130.453 336.875C108.234 363.5 96 397.281 96 432C96 440.844 103.156 448 112 448ZM155.031 357.375L192 313L228.984 357.375C242.969 374.156 251.906 394.531 254.891 416H129.109C132.094 394.531 141.031 374.156 155.031 357.375Z" })
  }
));
HourglassEndLight.displayName = "HourglassEndLight";
var HourglassEnd_default = HourglassEndLight;
