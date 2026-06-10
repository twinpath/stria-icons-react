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
var FaceLaughBeam_exports = {};
__export(FaceLaughBeam_exports, {
  default: () => FaceLaughBeam_default
});
module.exports = __toCommonJS(FaceLaughBeam_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceLaughBeamThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M286.062 215.75C290.219 216.781 294.672 214.187 295.766 209.937C299.531 194.906 315.031 152 336 152S372.469 194.906 376.234 209.937C377.156 213.562 380.406 216 384 216C384.641 216 385.297 215.906 385.938 215.75C390.234 214.687 392.828 210.344 391.766 206.062C389.969 198.875 373.172 136 336 136S282.031 198.875 280.234 206.062C279.172 210.344 281.766 214.687 286.062 215.75ZM126.062 215.75C130.25 216.781 134.672 214.187 135.766 209.937C139.531 194.906 155.031 152 176 152S212.469 194.906 216.234 209.937C217.156 213.562 220.406 216 224 216C224.641 216 225.297 215.906 225.938 215.75C230.234 214.687 232.828 210.344 231.766 206.062C229.969 198.875 213.172 136 176 136S122.031 198.875 120.234 206.062C119.172 210.344 121.766 214.687 126.062 215.75ZM256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256S388.547 16 256 16ZM256 480C132.484 480 32 379.516 32 256S132.484 32 256 32S480 132.484 480 256S379.516 480 256 480ZM391.904 288H120.098C110.469 288 102.91 296.5 104.129 306C113.027 377 174.092 432 247.955 432H264.045C337.908 432 398.973 377 407.871 306C409.09 296.375 401.533 288 391.904 288ZM264.045 416H247.955C183.014 416 128.006 367.855 120.098 304H391.904L391.996 304.012C383.994 367.855 328.988 416 264.045 416Z" })
  }
));
FaceLaughBeamThin.displayName = "FaceLaughBeamThin";
var FaceLaughBeam_default = FaceLaughBeamThin;
