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
var Cowbell_exports = {};
__export(Cowbell_exports, {
  default: () => Cowbell_default
});
module.exports = __toCommonJS(Cowbell_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CowbellThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.401 465.125L388.84 129.109C385.465 109.922 368.903 96 349.435 96H319.998V40C319.998 17.938 302.061 0 279.999 0H168.001C145.939 0 128.002 17.938 128.002 40V96H98.565C79.097 96 62.535 109.922 59.16 129.125L0.599 465.125C-1.432 476.797 1.755 488.687 9.38 497.75C17.005 506.797 28.161 512 40.004 512H407.996C419.839 512 430.995 506.797 438.62 497.75C446.245 488.688 449.432 476.797 447.401 465.125ZM144.002 40C144.002 26.766 154.783 16 168.001 16H279.999C293.217 16 303.998 26.766 303.998 40V96H144.002V40ZM426.37 487.453C421.808 492.875 415.089 496 407.996 496H40.004C32.911 496 26.192 492.875 21.63 487.453C17.067 482.016 15.13 474.875 16.348 467.875L74.91 131.891C76.941 120.359 86.878 112 98.565 112H349.435C361.122 112 371.059 120.359 373.09 131.875L431.652 467.875C432.87 474.875 430.933 482.016 426.37 487.453Z" })
  }
));
CowbellThin.displayName = "CowbellThin";
var Cowbell_default = CowbellThin;
