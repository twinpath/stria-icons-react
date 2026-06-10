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
var Browsers_exports = {};
__export(Browsers_exports, {
  default: () => Browsers_default
});
module.exports = __toCommonJS(Browsers_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BrowsersSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 432V96C21.49 96 0 117.492 0 144V448C0 483.344 28.654 512 64 512H432C458.51 512 480 490.508 480 464H80C62.326 464 48 449.672 48 432ZM512 0H160C124.654 0 96 28.654 96 64V352C96 387.346 124.654 416 160 416H512C547.346 416 576 387.346 576 352V64C576 28.654 547.346 0 512 0ZM224 116C224 122.625 218.625 128 212 128H172C165.375 128 160 122.625 160 116V76C160 69.375 165.375 64 172 64H212C218.625 64 224 69.375 224 76V116ZM512 116C512 122.625 506.625 128 500 128H268C261.375 128 256 122.625 256 116V76C256 69.375 261.375 64 268 64H500C506.625 64 512 69.375 512 76V116Z" })
  }
));
BrowsersSolid.displayName = "BrowsersSolid";
var Browsers_default = BrowsersSolid;
