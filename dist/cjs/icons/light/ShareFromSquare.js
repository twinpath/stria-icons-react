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
var ShareFromSquare_exports = {};
__export(ShareFromSquare_exports, {
  default: () => ShareFromSquare_default
});
module.exports = __toCommonJS(ShareFromSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShareFromSquareLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 352C391.164 352 384 359.164 384 368V448C384 465.672 369.674 480 352 480H64C46.328 480 32 465.672 32 448V160C32 142.328 46.328 128 64 128H176C184.838 128 192 120.836 192 112S184.838 96 176 96H64C28.654 96 0 124.656 0 160V448C0 483.344 28.654 512 64 512H352C387.348 512 416 483.344 416 448V368C416 359.164 408.838 352 400 352ZM570.25 131.719L410.25 3.723C403.5 -1.934 393.406 -1.059 387.719 5.754C382.062 12.535 382.969 22.629 389.75 28.285L515.801 128H368C270.969 128 192 206.969 192 304V336C192 344.844 199.156 352 208 352S224 344.844 224 336V304C224 224.594 288.594 160 368 160H515.801L389.75 259.719C382.969 265.375 382.062 275.469 387.719 282.25C390.875 286.031 395.438 288 400 288C403.625 288 407.25 286.781 410.25 284.281L570.25 156.281C573.906 153.25 576 148.75 576 144S573.906 134.75 570.25 131.719Z" })
  }
));
ShareFromSquareLight.displayName = "ShareFromSquareLight";
var ShareFromSquare_default = ShareFromSquareLight;
