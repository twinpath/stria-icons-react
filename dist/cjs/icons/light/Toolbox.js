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
var Toolbox_exports = {};
__export(Toolbox_exports, {
  default: () => Toolbox_default
});
module.exports = __toCommonJS(Toolbox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToolboxLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.256 173.254L466.746 146.744C454.744 134.742 438.465 128 421.49 128H384V80C384 53.531 362.469 32 336 32H176C149.531 32 128 53.531 128 80V128H90.51C73.537 128 57.258 134.742 45.256 146.744L18.746 173.254C6.744 185.256 0 201.535 0 218.51V416C0 451.346 28.654 480 64 480H448C483.348 480 512 451.346 512 416V218.51C512 201.535 505.258 185.256 493.256 173.254ZM160 80C160 71.172 167.172 64 176 64H336C344.828 64 352 71.172 352 80V128H160V80ZM41.373 195.883L67.883 169.371C73.928 163.328 81.963 160 90.51 160H421.49C430.039 160 438.074 163.328 444.117 169.371L470.629 195.883C476.672 201.926 480 209.961 480 218.51V304H368V272C368 263.156 360.844 256 352 256S336 263.156 336 272V304H176V272C176 263.156 168.844 256 160 256S144 263.156 144 272V304H32V218.51C32 209.961 35.33 201.926 41.373 195.883ZM448 448H64C46.355 448 32 433.645 32 416V336H144V368C144 376.844 151.156 384 160 384S176 376.844 176 368V336H336V368C336 376.844 343.156 384 352 384S368 376.844 368 368V336H480V416C480 433.645 465.645 448 448 448Z" })
  }
));
ToolboxLight.displayName = "ToolboxLight";
var Toolbox_default = ToolboxLight;
