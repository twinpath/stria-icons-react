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
const EllipsisStrokeVerticalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 256C176 211.818 140.184 176 96 176S16 211.818 16 256C16 300.184 51.816 336 96 336S176 300.184 176 256ZM64 256C64 238.355 78.355 224 96 224S128 238.355 128 256S113.645 288 96 288S64 273.645 64 256ZM176 432C176 387.818 140.184 352 96 352S16 387.818 16 432C16 476.184 51.816 512 96 512S176 476.184 176 432ZM64 432C64 414.355 78.355 400 96 400S128 414.355 128 432S113.645 464 96 464S64 449.645 64 432ZM176 80C176 35.818 140.184 0 96 0S16 35.818 16 80C16 124.184 51.816 160 96 160S176 124.184 176 80ZM64 80C64 62.355 78.355 48 96 48S128 62.355 128 80S113.645 112 96 112S64 97.645 64 80Z" })
  }
));
EllipsisStrokeVerticalRegular.displayName = "EllipsisStrokeVerticalRegular";
var EllipsisStrokeVertical_default = EllipsisStrokeVerticalRegular;
