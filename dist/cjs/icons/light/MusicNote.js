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
var MusicNote_exports = {};
__export(MusicNote_exports, {
  default: () => MusicNote_default
});
module.exports = __toCommonJS(MusicNote_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MusicNoteLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M341.999 1.611L213.375 33.487C200.75 37.737 192 49.987 192 63.988V376.121C171.625 361.246 143.375 351.996 112 351.996C50.125 351.996 0 387.872 0 431.998S50.125 512 112 512S224 476.124 224 431.998V191.991L362.125 156.615C375.125 152.24 384 139.99 384 126.24V31.987C384 21.737 379 12.111 370.75 6.111C362.375 0.111 351.75 -1.639 341.999 1.611ZM112 479.999C64.875 479.999 32 454.748 32 431.998S64.875 383.997 112 383.997S192 409.247 192 431.998S159.125 479.999 112 479.999ZM352 126.24L224 158.24V63.988H223.5V63.863L352 31.987V126.24Z" })
  }
));
MusicNoteLight.displayName = "MusicNoteLight";
var MusicNote_default = MusicNoteLight;
