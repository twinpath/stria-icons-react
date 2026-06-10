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
var AlignSlash_exports = {};
__export(AlignSlash_exports, {
  default: () => AlignSlash_default
});
module.exports = __toCommonJS(AlignSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AlignSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528.001 304H484.086L524.62 336H528.001C536.839 336 544.001 328.836 544.001 320C544.001 311.199 536.801 304 528.001 304ZM528.001 80C536.801 80 544.001 72.799 544.001 64C544.001 55.199 536.801 48 528.001 48H159.82L200.353 80H528.001ZM528.001 176H321.953L362.486 208H528.001C536.801 208 544.001 200.799 544.001 192C544.001 183.199 536.801 176 528.001 176ZM111.999 336H318.047L277.514 304H111.999C103.199 304 95.999 311.199 95.999 320C95.999 328.799 103.199 336 111.999 336ZM111.999 432C103.199 432 95.999 439.199 95.999 448C95.999 456.799 103.199 464 111.999 464H480.18L439.647 432H111.999ZM633.923 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.079 508.562C617.016 510.875 620.516 512 623.985 512C628.72 512 633.407 509.906 636.563 505.922C642.032 498.984 640.845 488.92 633.923 483.436ZM111.999 208H155.914L115.38 176H111.999C103.199 176 95.999 183.199 95.999 192C95.999 200.799 103.199 208 111.999 208Z" })
  }
));
AlignSlashLight.displayName = "AlignSlashLight";
var AlignSlash_default = AlignSlashLight;
