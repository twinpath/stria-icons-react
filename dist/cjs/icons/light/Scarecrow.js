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
var Scarecrow_exports = {};
__export(Scarecrow_exports, {
  default: () => Scarecrow_default
});
module.exports = __toCommonJS(Scarecrow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScarecrowLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.009 120C264.759 120 272.009 112.75 272.009 104S264.759 88 256.009 88S240.008 95.25 240.008 104S247.258 120 256.009 120ZM192.007 104C200.757 104 208.007 96.75 208.007 88S200.757 72 192.007 72S176.006 79.25 176.006 88S183.256 104 192.007 104ZM445.765 186.25L419.264 160L437.64 141.75C442.64 136.75 439.14 128 431.89 128H320.011V96C320.011 43 277.01 0 224.008 0S128.004 43 128.004 96V128H16.001C8.875 128 5.25 136.625 10.25 141.75L28.751 160L2.25 186.25C-0.75 189.375 -0.75 194.5 2.25 197.625L28.751 224L10.375 242.25C5.375 247.25 8.875 256 16.126 256H122.254L96.253 397.25C94.128 410 107.254 420.25 119.129 414.25L151.755 390C158.168 385.258 188.651 399.961 208.007 409.193V496C208.007 504.844 215.164 512 224.008 512S240.008 504.844 240.008 496V409.18C259.319 399.945 289.69 385.26 296.01 390L328.761 414.25C340.637 420.25 353.762 409.875 351.637 397.25L325.886 256H432.015C439.14 256 442.765 247.375 437.765 242.25L419.264 224L445.64 197.75C448.765 194.5 448.765 189.5 445.765 186.25ZM160.005 96C160.005 60.75 188.756 32 224.008 32S288.01 60.75 288.01 96V128C288.01 145.625 273.634 160 256.009 160H192.007C174.381 160 160.005 145.625 160.005 128V96ZM374.138 224H287.51L312.886 362.75C305.135 357.625 296.01 354.875 286.635 354.875C278.76 354.875 270.884 356.875 264.009 360.5L224.008 381.75L184.006 360.5C177.006 356.75 169.256 354.875 161.381 354.875C152.005 354.875 142.88 357.625 135.13 362.75L160.506 224H73.878L41.876 192L73.878 160H136.755C147.88 179 168.256 192 191.882 192H255.884C279.51 192 299.885 179 311.011 160H374.013L406.014 192L374.138 224Z" })
  }
));
ScarecrowLight.displayName = "ScarecrowLight";
var Scarecrow_default = ScarecrowLight;
