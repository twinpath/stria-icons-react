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
var Screencast_exports = {};
__export(Screencast_exports, {
  default: () => Screencast_default
});
module.exports = __toCommonJS(Screencast_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScreencastThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M515.5 32H60.5C27.125 32 0 59.812 0 94V160C0 164.406 3.594 168 8 168S16 164.406 16 160V94C16 68.625 35.969 48 60.5 48H515.5C540.031 48 560 68.625 560 94V418C560 443.375 540.031 464 515.5 464H320C315.594 464 312 467.594 312 472S315.594 480 320 480H515.5C548.875 480 576 452.188 576 418V94C576 59.812 548.875 32 515.5 32ZM32 416C14.328 416 0 430.328 0 448S14.328 480 32 480C49.674 480 64 465.672 64 448S49.674 416 32 416ZM32 464C23.178 464 16 456.824 16 448S23.178 432 32 432S48 439.176 48 448S40.822 464 32 464ZM8 336C3.594 336 0 339.594 0 344S3.594 352 8 352C74.156 352 128 405.844 128 472C128 476.406 131.594 480 136 480S144 476.406 144 472C144 397 83 336 8 336ZM8 240C3.594 240 0 243.594 0 248S3.594 256 8 256C127.094 256 224 352.906 224 472C224 476.406 227.594 480 232 480S240 476.406 240 472C240 344.062 135.938 240 8 240Z" })
  }
));
ScreencastThin.displayName = "ScreencastThin";
var Screencast_default = ScreencastThin;
