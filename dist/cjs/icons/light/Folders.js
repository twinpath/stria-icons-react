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
var Folders_exports = {};
__export(Folders_exports, {
  default: () => Folders_default
});
module.exports = __toCommonJS(Folders_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FoldersLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 96H400L354.746 50.746C342.742 38.742 326.465 32 309.49 32H192C156.654 32 128 60.654 128 96V352C128 387.346 156.654 416 192 416H576C611.346 416 640 387.346 640 352V160C640 124.654 611.346 96 576 96ZM608 352C608 369.645 593.645 384 576 384H192C174.355 384 160 369.645 160 352V96C160 78.355 174.355 64 192 64H309.49C318.039 64 326.074 67.328 332.117 73.375L377.373 118.627L386.746 128H576C593.645 128 608 142.355 608 160V352ZM432 480H128C92.654 480 64 451.346 64 416V176C64 167.164 56.836 160 48 160S32 167.164 32 176V416C32 469.02 74.98 512 128 512H432C440.836 512 448 504.836 448 496S440.836 480 432 480Z" })
  }
));
FoldersLight.displayName = "FoldersLight";
var Folders_default = FoldersLight;
