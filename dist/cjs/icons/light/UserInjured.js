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
var UserInjured_exports = {};
__export(UserInjured_exports, {
  default: () => UserInjured_default
});
module.exports = __toCommonJS(UserInjured_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserInjuredLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304ZM64 480H34.664C33.195 480 32 478.803 32 477.332C32 443.691 44.303 413.176 64 388.881V480ZM96 480V359.283C108.789 350.877 123.127 344.826 138.34 340.912L226.854 480H96ZM288 480H264.781L224.063 416H288C305.641 416 320 430.359 320 448S305.641 480 288 480ZM413.336 480H343.1C348.611 470.549 352 459.709 352 448C352 412.703 323.297 384 288 384H203.688L173.158 336.018C173.219 336.018 173.275 336 173.336 336H274.664C352.598 336 416 399.4 416 477.332C416 478.803 414.805 480 413.336 480ZM224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM306.645 80H237.625L277.318 48.244C289.432 56.369 299.275 67.365 306.645 80ZM224 32C230.777 32 237.379 32.748 243.764 34.09L186.375 80H141.355C158.01 51.445 188.627 32 224 32ZM129.617 112H318.383C319.27 117.23 320 122.521 320 128C320 180.934 276.936 224 224 224S128 180.934 128 128C128 122.521 128.73 117.23 129.617 112Z" })
  }
));
UserInjuredLight.displayName = "UserInjuredLight";
var UserInjured_default = UserInjuredLight;
