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
var MusicNoteSlash_exports = {};
__export(MusicNoteSlash_exports, {
  default: () => MusicNoteSlash_default
});
module.exports = __toCommonJS(MusicNoteSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MusicNoteSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M633.925 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.081 508.562C617.019 510.875 620.519 512 623.987 512C628.722 512 633.409 509.906 636.566 505.922C642.034 498.984 640.847 488.92 633.925 483.436ZM320.001 376.121C299.626 361.246 271.376 351.996 240.001 351.996C178.126 351.996 128.001 387.871 128.001 431.998C128.001 476.123 178.126 512 240.001 512S352.001 476.123 352.001 431.998V362.807L320.001 337.543V376.121ZM240.001 479.998C192.876 479.998 160.001 454.748 160.001 431.998C160.001 409.246 192.876 383.996 240.001 383.996S320.001 409.246 320.001 431.998C320.001 454.748 287.126 479.998 240.001 479.998ZM352.001 191.99L490.126 156.615C503.126 152.24 512.001 139.99 512.001 126.238V31.986C512.001 21.736 507.001 12.111 498.751 6.111C490.376 0.111 479.751 -1.639 470.001 1.611L341.376 33.486C328.751 37.736 320.001 49.986 320.001 63.988V174.438L352.001 199.701V191.99ZM351.501 63.863L480.001 31.986V126.238L352.001 158.24V63.988H351.501V63.863Z" })
  }
));
MusicNoteSlashLight.displayName = "MusicNoteSlashLight";
var MusicNoteSlash_default = MusicNoteSlashLight;
