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
var EllipsisStrokeVertical_exports = {};
__export(EllipsisStrokeVertical_exports, {
  default: () => EllipsisStrokeVertical_default
});
module.exports = __toCommonJS(EllipsisStrokeVertical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EllipsisStrokeVerticalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 192 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 384C60.654 384 32 412.654 32 448S60.654 512 96 512S160 483.346 160 448S131.346 384 96 384ZM96 480C78.355 480 64 465.645 64 448S78.355 416 96 416S128 430.355 128 448S113.645 480 96 480ZM96 128C131.346 128 160 99.346 160 64S131.346 0 96 0S32 28.654 32 64S60.654 128 96 128ZM96 32C113.645 32 128 46.355 128 64S113.645 96 96 96S64 81.645 64 64S78.355 32 96 32ZM96 192C60.654 192 32 220.654 32 256S60.654 320 96 320S160 291.346 160 256S131.346 192 96 192ZM96 288C78.355 288 64 273.645 64 256S78.355 224 96 224S128 238.355 128 256S113.645 288 96 288Z" })
  }
));
EllipsisStrokeVerticalLight.displayName = "EllipsisStrokeVerticalLight";
var EllipsisStrokeVertical_default = EllipsisStrokeVerticalLight;
