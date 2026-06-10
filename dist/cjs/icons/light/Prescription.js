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
var Prescription_exports = {};
__export(Prescription_exports, {
  default: () => Prescription_default
});
module.exports = __toCommonJS(Prescription_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PrescriptionLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M310.625 352L411.312 251.312C417.562 245.062 417.562 234.937 411.312 228.688S394.937 222.438 388.688 228.688L288 329.375L182.625 224H192C244.938 224 288 180.938 288 128S244.938 32 192 32H80C53.531 32 32 53.531 32 80V304C32 312.844 39.156 320 48 320S64 312.844 64 304V224H137.375L265.375 352L164.688 452.688C158.438 458.938 158.438 469.063 164.688 475.312C167.812 478.438 171.906 480 176 480S184.188 478.438 187.312 475.312L288 374.625L388.688 475.312C391.812 478.438 395.906 480 400 480S408.188 478.438 411.312 475.312C417.562 469.062 417.562 458.937 411.312 452.688L310.625 352ZM64 80C64 71.188 71.172 64 80 64H192C227.297 64 256 92.719 256 128S227.297 192 192 192H64V80Z" })
  }
));
PrescriptionLight.displayName = "PrescriptionLight";
var Prescription_default = PrescriptionLight;
