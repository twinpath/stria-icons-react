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
const VolumeSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.812 469.109L542.023 399.52C583.904 362.791 607.999 310.938 607.999 256.002C607.999 198.879 582.156 144.91 537.124 108.004C532.669 104.367 527.283 102.588 521.923 102.588C514.99 102.588 508.103 105.566 503.343 111.348C494.937 121.598 496.437 136.723 506.687 145.129C540.562 172.91 559.999 213.316 559.999 256.002C559.999 298.689 540.562 339.096 506.687 366.877C505.64 367.736 505.087 368.906 504.224 369.893L459.888 335.145C460.396 335.178 460.865 335.471 461.374 335.471C466.718 335.471 472.124 333.689 476.562 330.064C499.093 311.627 511.999 284.658 511.999 256.002C511.999 227.348 499.093 200.379 476.562 181.941C472.091 178.312 466.704 176.541 461.359 176.541C454.41 176.541 447.529 179.535 442.812 185.348C434.406 195.598 435.906 210.723 446.187 219.129C457.499 228.379 463.999 241.814 463.999 256.002S457.499 283.627 446.187 292.877C438.464 299.191 435.704 309.293 438.367 318.275L383.999 275.664V64.006C383.999 51.412 376.609 39.975 365.109 34.818C360.908 32.922 356.443 31.998 352.013 31.998C344.316 31.998 336.714 34.783 330.734 40.1L214.861 143.096L38.812 5.113C28.343 -3.059 13.312 -1.246 5.109 9.191C-3.063 19.629 -1.235 34.723 9.187 42.895L601.187 506.891C605.593 510.328 610.796 512 615.984 512C623.109 512 630.156 508.844 634.89 502.812C643.062 492.375 641.234 477.281 630.812 469.109ZM335.999 238.043L253.255 173.189L335.999 99.641V238.043ZM335.999 412.365L214.089 304.002H111.999V208.004H142.017L88.749 166.254C74.054 174.459 63.999 189.979 63.999 208.004V304.002C63.999 330.51 85.49 352.002 111.999 352.002H195.839L330.734 471.906C336.718 477.219 344.312 480 351.999 480C356.437 480 360.906 479.094 365.109 477.188C376.609 472.031 383.999 460.594 383.999 448V397.664L335.999 360.043V412.365Z" })
  }
));
VolumeSlashRegular.displayName = "VolumeSlashRegular";
var VolumeSlash_default = VolumeSlashRegular;
