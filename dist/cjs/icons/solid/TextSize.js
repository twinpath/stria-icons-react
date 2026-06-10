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
var TextSize_exports = {};
__export(TextSize_exports, {
  default: () => TextSize_default
});
module.exports = __toCommonJS(TextSize_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TextSizeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 120V72C384 49.906 366.094 32 344 32H40C17.906 32 0 49.906 0 72V120C0 142.094 17.906 160 40 160S80 142.094 80 120V112H152.643C152.551 113.107 152 114.057 152 115.188V416H128C110.328 416 96 430.312 96 448S110.328 480 128 480H256C273.672 480 288 465.688 288 448S273.672 416 256 416H232V115.188C232 114.057 231.449 113.107 231.357 112H304V120C304 142.094 321.906 160 344 160S384 142.094 384 120ZM608 224H352C334.328 224 320 238.312 320 256V288C320 305.688 334.328 320 352 320S384 305.688 384 288H448V416H432C414.328 416 400 430.312 400 448S414.328 480 432 480H528C545.672 480 560 465.688 560 448S545.672 416 528 416H512V288H576C576 305.688 590.328 320 608 320S640 305.688 640 288V256C640 238.312 625.672 224 608 224Z" })
  }
));
TextSizeSolid.displayName = "TextSizeSolid";
var TextSize_default = TextSizeSolid;
