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
var VolumeLow_exports = {};
__export(VolumeLow_exports, {
  default: () => VolumeLow_default
});
module.exports = __toCommonJS(VolumeLow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VolumeLowLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M301.109 34.816C296.908 32.922 292.445 32 288.014 32C280.316 32 272.715 34.783 266.734 40.1L131.84 160.004H48C21.49 160.004 0 181.496 0 208.002V304.002C0 330.51 21.49 352 48 352H131.84L266.734 471.906C272.719 477.219 280.312 480 288 480C292.438 480 296.906 479.094 301.109 477.188C312.609 472.031 320 460.594 320 448V64.006C320 51.41 312.609 39.973 301.109 34.816ZM287.98 447.951L153.086 328.043L143.996 319.963H48C39.178 319.963 32 312.803 32 304.002V208.002C32 199.201 39.178 192.041 48 192.041H143.996L153.086 183.961L287.98 64.057C287.988 64.049 287.996 64.045 288 64.041L287.98 447.951ZM406.438 178.703C399.109 173.781 389.156 175.75 384.234 183.094S381.281 200.375 388.625 205.297C405.766 216.766 416 235.734 416 256S405.766 295.234 388.625 306.703C381.281 311.625 379.312 321.563 384.234 328.906C387.328 333.516 392.391 336 397.547 336C400.609 336 403.703 335.125 406.437 333.297C432.469 315.859 448 286.969 448 256S432.469 196.141 406.438 178.703Z" })
  }
));
VolumeLowLight.displayName = "VolumeLowLight";
var VolumeLow_default = VolumeLowLight;
