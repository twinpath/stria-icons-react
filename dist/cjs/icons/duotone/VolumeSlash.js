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
var VolumeSlash_exports = {};
__export(VolumeSlash_exports, {
  default: () => VolumeSlash_default
});
module.exports = __toCommonJS(VolumeSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VolumeSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 208.004V304.002C64 330.51 85.49 352.002 112 352.002H195.84L330.734 471.906C336.719 477.219 344.312 480 352 480C356.438 480 360.906 479.094 365.109 477.188C376.609 472.031 384 460.594 384 448V397.656L88.756 166.252C74.057 174.457 64 189.977 64 208.004ZM365.109 34.818C353.609 29.631 340.156 31.725 330.734 40.1L214.865 143.094L384 275.656V64.006C384 51.412 376.609 39.975 365.109 34.818ZM476.562 181.941C466.281 173.598 451.156 175.066 442.812 185.348C434.406 195.598 435.906 210.723 446.188 219.129C457.5 228.379 464 241.814 464 256.002S457.5 283.627 446.188 292.877C438.469 299.188 435.705 309.283 438.361 318.264L459.902 335.146C460.406 335.178 460.869 335.471 461.375 335.471C466.719 335.471 472.125 333.689 476.562 330.064C499.094 311.627 512 284.658 512 256.002C512 227.348 499.094 200.379 476.562 181.941ZM537.125 108.004C526.906 99.66 511.781 101.098 503.344 111.348C494.937 121.598 496.437 136.723 506.687 145.129C540.562 172.91 560 213.316 560 256.002C560 298.689 540.562 339.096 506.688 366.877C505.643 367.734 505.09 368.904 504.229 369.889L542.029 399.516C583.906 362.787 608 310.936 608 256.002C608 198.879 582.156 144.91 537.125 108.004Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M634.874 502.805C626.749 513.211 611.687 515.086 601.187 506.883L9.189 42.889C-1.249 34.717 -3.061 19.625 5.126 9.188C9.845 3.156 16.907 0 24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.812 469.102C641.249 477.273 643.062 492.367 634.874 502.805Z" })
    ]
  }
));
VolumeSlashDuotone.displayName = "VolumeSlashDuotone";
var VolumeSlash_default = VolumeSlashDuotone;
