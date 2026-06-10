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
var Dna_exports = {};
__export(Dna_exports, {
  default: () => Dna_default
});
module.exports = __toCommonJS(Dna_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DnaLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M318.828 305.188L297.406 289.609C290.219 284.391 280.219 285.984 275.062 293.141C269.859 300.281 271.438 310.297 278.594 315.484L300.016 331.063C308.686 337.367 316.545 344.512 324.018 352H123.982C131.455 344.512 139.314 337.367 147.984 331.062L318.828 206.812C379.672 162.562 416 91.234 416 16C416 7.156 408.844 0 400 0S384 7.156 384 16C384 21.375 383.465 26.68 383.041 32H64.959C64.535 26.68 64 21.375 64 16C64 7.156 56.844 0 48 0S32 7.156 32 16C32 91.234 68.328 162.562 129.172 206.812L196.805 256L129.172 305.188C68.328 349.438 32 420.766 32 496C32 504.844 39.156 512 48 512S64 504.844 64 496C64 490.625 64.535 485.32 64.959 480H383.041C383.465 485.32 384 490.625 384 496C384 504.844 391.156 512 400 512S416 504.844 416 496C416 420.766 379.672 349.438 318.828 305.188ZM378.221 64C372.668 86.809 363.172 108.453 350.338 128H97.662C84.828 108.453 75.332 86.809 69.779 64H378.221ZM147.984 180.938C139.314 174.633 131.455 167.488 123.982 160H324.018C316.545 167.488 308.686 174.633 300.016 180.938L224 236.219L147.984 180.938ZM69.779 448C75.332 425.191 84.828 403.547 97.662 384H350.338C363.172 403.547 372.668 425.191 378.221 448H69.779Z" })
  }
));
DnaLight.displayName = "DnaLight";
var Dna_default = DnaLight;
