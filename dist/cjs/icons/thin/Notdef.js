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
var Notdef_exports = {};
__export(Notdef_exports, {
  default: () => Notdef_default
});
module.exports = __toCommonJS(Notdef_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NotdefThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 0H32C14.326 0 0 14.328 0 32V480C0 497.672 14.326 512 32 512H352C369.674 512 384 497.672 384 480V32C384 14.328 369.674 0 352 0ZM368 32V480C368 480.688 367.691 481.281 367.605 481.945L201.914 256L367.605 30.055C367.691 30.719 368 31.312 368 32ZM352 16C353.879 16 355.623 16.477 357.299 17.07L192 242.484L26.701 17.07C28.377 16.477 30.121 16 32 16H352ZM16.395 481.945C16.309 481.281 16 480.688 16 480V32C16 31.312 16.309 30.719 16.395 30.055L182.086 256L16.395 481.945ZM32 496C30.121 496 28.377 495.523 26.701 494.93L192 269.516L357.299 494.93C355.623 495.523 353.879 496 352 496H32Z" })
  }
));
NotdefThin.displayName = "NotdefThin";
var Notdef_default = NotdefThin;
