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
var Joystick_exports = {};
__export(Joystick_exports, {
  default: () => Joystick_default
});
module.exports = __toCommonJS(Joystick_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const JoystickThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 352H232V223.195C290.051 219.02 336 171.117 336 112C336 50.145 285.855 0 224 0S112 50.145 112 112C112 171.117 157.949 219.02 216 223.195V352H136V336C136 322.781 125.219 312 112 312H80C66.781 312 56 322.781 56 336V352H32C14.375 352 0 366.375 0 384V480C0 497.625 14.375 512 32 512H416C433.625 512 448 497.625 448 480V384C448 366.375 433.625 352 416 352ZM128 112C128 59.066 171.064 16 224 16S320 59.066 320 112S276.936 208 224 208S128 164.934 128 112ZM72 336C72 331.594 75.594 328 80 328H112C116.406 328 120 331.594 120 336V352H72V336ZM432 480C432 488.824 424.822 496 416 496H32C23.178 496 16 488.824 16 480V384C16 375.176 23.178 368 32 368H416C424.822 368 432 375.176 432 384V480ZM240 80C240 62.344 225.656 48 208 48S176 62.344 176 80S190.344 112 208 112S240 97.656 240 80ZM208 96C199.188 96 192 88.812 192 80S199.188 64 208 64S224 71.188 224 80S216.812 96 208 96Z" })
  }
));
JoystickThin.displayName = "JoystickThin";
var Joystick_default = JoystickThin;
