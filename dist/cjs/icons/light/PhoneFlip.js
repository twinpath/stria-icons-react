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
var PhoneFlip_exports = {};
__export(PhoneFlip_exports, {
  default: () => PhoneFlip_default
});
module.exports = __toCommonJS(PhoneFlip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneFlipLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1.153 382.406L22.95 476.875C27.716 497.562 45.888 512 67.122 512C312.436 512 512 312.437 512 67.123C512 45.904 497.531 27.779 476.828 23.06L382.437 1.154C361.233 -3.737 339.343 7.279 330.624 27.373L287.014 129.154C279.03 147.842 284.186 169.077 299.858 181.998L340.374 215.186C311.671 267.921 267.811 311.78 215.061 340.499L181.92 300.03C169.373 284.577 147.669 279.265 129.169 286.952L27.419 330.593C27.403 330.624 27.387 330.624 27.372 330.624C7.294 339.312 -3.738 361.093 1.153 382.406ZM32.341 375.218C30.903 368.968 34.153 362.562 40.059 359.999L141.638 316.437C146.982 314.218 153.435 315.718 157.138 320.28L198.529 370.781C203.232 376.531 211.326 378.312 217.967 374.999C285.795 341.624 341.53 285.905 374.905 218.092C378.187 211.421 376.437 203.374 370.687 198.655L320.186 157.28C315.608 153.498 314.077 147.248 316.436 141.733L360.015 40.029C362.155 35.092 367.03 31.998 372.265 31.998C373.249 31.998 374.249 32.107 375.249 32.342L469.656 54.248C475.765 55.639 480 60.935 480 67.123C480 294.78 294.78 480 67.122 480C60.981 480 55.513 475.656 54.138 469.687L32.341 375.218Z" })
  }
));
PhoneFlipLight.displayName = "PhoneFlipLight";
var PhoneFlip_default = PhoneFlipLight;
