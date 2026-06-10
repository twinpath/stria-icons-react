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
var WavePulse_exports = {};
__export(WavePulse_exports, {
  default: () => WavePulse_default
});
module.exports = __toCommonJS(WavePulse_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WavePulseLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 240C640 248.801 632.801 256 624 256H490.875L430.875 406C428.25 412.375 422.5 416.25 414.875 416C408 415.5 402.125 410.625 400.5 403.875L321.75 88.875L239.75 499.125C238.25 506.5 231.875 511.75 224.375 512H224C216.75 512 210.25 507 208.5 499.875L147.5 256H16C7.201 256 0 248.801 0 240S7.201 224 16 224H160C167.375 224 173.75 229 175.5 236.125L222.25 423.125L304.25 12.875C305.75 5.5 312.125 0.25 319.625 0C327.75 0.125 333.75 4.875 335.5 12.125L419.5 348.125L465.125 234C467.5 228 473.5 224 480 224H624C632.801 224 640 231.199 640 240Z" })
  }
));
WavePulseLight.displayName = "WavePulseLight";
var WavePulse_default = WavePulseLight;
