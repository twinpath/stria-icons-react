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
var ShareAll_exports = {};
__export(ShareAll_exports, {
  default: () => ShareAll_default
});
module.exports = __toCommonJS(ShareAll_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShareAllThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M370.734 401.968C367.406 404.874 367.062 409.937 369.984 413.281C371.562 415.062 373.781 415.999 376 415.999C377.875 415.999 379.75 415.343 381.266 414.031L573.266 246.028C575 244.497 576 242.309 576 239.997C576 237.684 575 235.496 573.266 233.965L381.266 65.962C377.938 63.087 372.891 63.4 369.984 66.712C367.062 70.056 367.406 75.119 370.734 78.025L555.844 239.997L370.734 401.968ZM0 367.999V440C0 444.406 3.578 448 8 448S16 444.406 16 440V367.999C16 301.841 69.828 247.997 136 247.997H418.701L242.734 401.968C239.406 404.874 239.062 409.937 241.984 413.281C243.562 415.062 245.781 415.999 248 415.999C249.875 415.999 251.75 415.343 253.266 414.031L445.266 246.028C447 244.497 448 242.309 448 239.997C448 237.684 447 235.496 445.266 233.965L253.266 65.962C249.938 63.087 244.891 63.4 241.984 66.712C239.062 70.056 239.406 75.119 242.734 78.025L418.701 231.996H136C61.016 231.996 0 292.997 0 367.999Z" })
  }
));
ShareAllThin.displayName = "ShareAllThin";
var ShareAll_default = ShareAllThin;
