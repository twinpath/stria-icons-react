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
var Upload_exports = {};
__export(Upload_exports, {
  default: () => Upload_default
});
module.exports = __toCommonJS(Upload_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UploadThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 349.656H328C323.582 349.656 320 353.238 320 357.656S323.582 365.656 328 365.656H480C488.822 365.656 496 372.834 496 381.656V477.656C496 486.479 488.822 493.656 480 493.656H32C23.178 493.656 16 486.479 16 477.656V381.656C16 372.834 23.178 365.656 32 365.656H184C188.418 365.656 192 362.074 192 357.656S188.418 349.656 184 349.656H32C14.326 349.656 0 363.982 0 381.656V477.656C0 495.328 14.326 509.656 32 509.656H480C497.674 509.656 512 495.328 512 477.656V381.656C512 363.982 497.674 349.656 480 349.656ZM464 429.656C464 412.055 449.6 397.656 432 397.656S400 412.055 400 429.656C400 447.254 414.4 461.656 432 461.656S464 447.254 464 429.656ZM416 429.656C416 420.834 423.178 413.656 432 413.656S448 420.834 448 429.656S440.822 445.656 432 445.656S416 438.479 416 429.656ZM109.656 163.313L248 24.969V405.656C248 410.063 251.578 413.656 256 413.656S264 410.063 264 405.656V24.969L402.344 163.313C405.469 166.437 410.531 166.437 413.656 163.313S416.781 155.125 413.656 152L261.656 0C258.531 -3.125 253.469 -3.125 250.344 0L98.344 152C96.781 153.563 96 155.594 96 157.656S96.781 161.75 98.344 163.313C101.469 166.438 106.531 166.438 109.656 163.313Z" })
  }
));
UploadThin.displayName = "UploadThin";
var Upload_default = UploadThin;
