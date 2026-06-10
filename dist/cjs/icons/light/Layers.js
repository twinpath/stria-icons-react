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
var Layers_exports = {};
__export(Layers_exports, {
  default: () => Layers_default
});
module.exports = __toCommonJS(Layers_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LayersLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.219 142.5L249.219 254.5C251.375 255.5 253.688 256 256 256S260.625 255.5 262.781 254.5L502.781 142.5C508.406 139.875 512 134.219 512 128S508.406 116.125 502.781 113.5L262.781 1.5C258.469 -0.5 253.531 -0.5 249.219 1.5L9.219 113.5C3.594 116.125 0 121.781 0 128S3.594 139.875 9.219 142.5ZM256 33.656L458.156 128L256 222.344L53.844 128L256 33.656ZM502.781 241.5L434.219 209.5C426.188 205.797 416.688 209.203 412.938 217.234C409.188 225.234 412.656 234.766 420.656 238.5L458.156 256L256 350.344L53.844 256L91.344 238.5C99.344 234.766 102.812 225.234 99.062 217.234C95.312 209.203 85.75 205.797 77.781 209.5L9.219 241.5C3.594 244.125 0 249.781 0 256S3.594 267.875 9.219 270.5L249.219 382.5C251.375 383.5 253.688 384 256 384S260.625 383.5 262.781 382.5L502.781 270.5C508.406 267.875 512 262.219 512 256S508.406 244.125 502.781 241.5ZM502.781 369.5L434.219 337.5C426.188 333.812 416.688 337.219 412.938 345.234C409.188 353.234 412.656 362.766 420.656 366.5L458.156 384L256 478.344L53.844 384L91.344 366.5C99.344 362.766 102.812 353.234 99.062 345.234C95.312 337.219 85.75 333.812 77.781 337.5L9.219 369.5C3.594 372.125 0 377.781 0 384S3.594 395.875 9.219 398.5L249.219 510.5C251.375 511.5 253.688 512 256 512S260.625 511.5 262.781 510.5L502.781 398.5C508.406 395.875 512 390.219 512 384S508.406 372.125 502.781 369.5Z" })
  }
));
LayersLight.displayName = "LayersLight";
var Layers_default = LayersLight;
