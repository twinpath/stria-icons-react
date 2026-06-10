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
var SteeringWheel_exports = {};
__export(SteeringWheel_exports, {
  default: () => SteeringWheel_default
});
module.exports = __toCommonJS(SteeringWheel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SteeringWheelThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 32C376.812 32 475.336 128.209 479.596 248H351.611C351.648 247.301 352 246.672 352 245.969V232C352 209.938 334.062 192 312 192H200C177.938 192 160 209.938 160 232V245.969C160 246.672 160.352 247.301 160.389 248H32.404C36.664 128.209 135.188 32 256 32ZM256 340.344L182.531 262.406C178.312 257.938 176 252.094 176 245.969V232C176 218.781 186.781 208 200 208H312C325.219 208 336 218.781 336 232V245.969C336 252.094 333.688 257.937 329.469 262.406L256 340.344ZM32.404 264H164.908C166.611 267.303 168.301 270.637 170.906 273.406L248 355.172V479.596C130.887 475.432 36.568 381.113 32.404 264ZM264 479.596V355.172L341.094 273.406C343.699 270.637 345.389 267.303 347.092 264H479.596C475.432 381.113 381.113 475.432 264 479.596Z" })
  }
));
SteeringWheelThin.displayName = "SteeringWheelThin";
var SteeringWheel_default = SteeringWheelThin;
