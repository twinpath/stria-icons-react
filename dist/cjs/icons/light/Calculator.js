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
var Calculator_exports = {};
__export(Calculator_exports, {
  default: () => Calculator_default
});
module.exports = __toCommonJS(Calculator_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalculatorLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 0H64C28.656 0 0 28.656 0 64V448C0 483.344 28.656 512 64 512H320C355.344 512 384 483.344 384 448V64C384 28.656 355.344 0 320 0ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V160H352V448ZM352 128H32V64C32 46.355 46.355 32 64 32H320C337.645 32 352 46.355 352 64V128ZM80 432H208C216.844 432 224 424.844 224 416S216.844 400 208 400H80C71.156 400 64 407.156 64 416S71.156 432 80 432ZM288 440C301.254 440 312 429.254 312 416S301.254 392 288 392S264 402.746 264 416S274.746 440 288 440ZM288 344C301.254 344 312 333.254 312 320S301.254 296 288 296S264 306.746 264 320S274.746 344 288 344ZM288 248C301.254 248 312 237.254 312 224S301.254 200 288 200S264 210.746 264 224S274.746 248 288 248ZM192 344C205.254 344 216 333.254 216 320S205.254 296 192 296S168 306.746 168 320S178.746 344 192 344ZM192 248C205.254 248 216 237.254 216 224S205.254 200 192 200S168 210.746 168 224S178.746 248 192 248ZM96 344C109.254 344 120 333.254 120 320S109.254 296 96 296S72 306.746 72 320S82.746 344 96 344ZM96 248C109.254 248 120 237.254 120 224S109.254 200 96 200S72 210.746 72 224S82.746 248 96 248Z" })
  }
));
CalculatorLight.displayName = "CalculatorLight";
var Calculator_default = CalculatorLight;
