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
var CircleVideo_exports = {};
__export(CircleVideo_exports, {
  default: () => CircleVideo_default
});
module.exports = __toCommonJS(CircleVideo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleVideoThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM288 160H160C142.326 160 128 174.326 128 192V320C128 337.674 142.326 352 160 352H288C305.674 352 320 337.674 320 320V192C320 174.326 305.674 160 288 160ZM304 320C304 328.822 296.822 336 288 336H160C151.178 336 144 328.822 144 320V192C144 183.178 151.178 176 160 176H288C296.822 176 304 183.178 304 192V320ZM408.406 183.312C403.656 180.375 397.844 180.125 392.875 182.625L340.437 208.844C336.469 210.812 334.875 215.625 336.844 219.562C338.844 223.562 343.781 225.094 347.562 223.156L400 196.938V315.062L347.562 288.844C343.75 286.938 338.844 288.469 336.844 292.438C334.875 296.375 336.469 301.188 340.438 303.156L392.875 329.375C395.125 330.5 397.562 331.062 400 331.062C402.938 331.062 405.812 330.281 408.406 328.687C413.156 325.75 416 320.656 416 315.062V196.938C416 191.344 413.156 186.25 408.406 183.312Z" })
  }
));
CircleVideoThin.displayName = "CircleVideoThin";
var CircleVideo_default = CircleVideoThin;
