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
var FileDashedLine_exports = {};
__export(FileDashedLine_exports, {
  default: () => FileDashedLine_default
});
module.exports = __toCommonJS(FileDashedLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileDashedLineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 288C160 274.75 149.25 264 136 264H24C10.75 264 0 274.75 0 288S10.75 312 24 312H136C149.25 312 160 301.25 160 288ZM552 264H440C426.75 264 416 274.75 416 288S426.75 312 440 312H552C565.25 312 576 301.25 576 288S565.25 264 552 264ZM248 264C234.75 264 224 274.75 224 288S234.75 312 248 312H328C341.25 312 352 301.25 352 288S341.25 264 328 264H248ZM144.008 224L144 64.125C144 55.289 151.164 48.125 160 48.125H320.008V128C320.008 145.672 334.334 160 352.008 160H432.002V224H480V138.641C480 121.664 473.258 105.383 461.256 93.383L386.627 18.746C374.625 6.742 358.348 0 341.373 0H160C124.654 0 96 28.652 96 64L96.008 224H144.008ZM432.002 448C432.002 456.836 424.838 464 416.002 464H160.018C151.18 464 144.018 456.836 144.018 448L144.014 352H96.016L96.02 448C96.02 483.344 124.674 512 160.02 512H416C451.199 512 480 483.199 480 448V352H432.002V448Z" })
  }
));
FileDashedLineRegular.displayName = "FileDashedLineRegular";
var FileDashedLine_default = FileDashedLineRegular;
