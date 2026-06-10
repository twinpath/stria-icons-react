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
const VolumeSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M351.982 64.057C351.989 64.049 351.997 64.045 352.001 64.041L351.993 199.695L384.001 224.965V64.006C384.001 51.41 376.61 39.973 365.11 34.816C360.909 32.922 356.446 32 352.015 32C344.317 32 336.716 34.783 330.735 40.1L245.646 115.734L271.171 135.887L351.982 64.057ZM480.001 256C480.001 268.908 475.472 281.051 468.026 291.303L493.001 311.02C504.835 295.184 512.001 276.213 512.001 256C512.001 225.031 496.47 196.141 470.439 178.703C463.11 173.781 453.157 175.75 448.235 183.094S445.282 200.375 452.626 205.297C469.767 216.766 480.001 235.734 480.001 256ZM576.001 256C576.001 290.73 564.183 323.809 543.462 350.857L568.534 370.652C593.655 338.029 608.001 298.041 608.001 256C608.001 193 576.36 134.203 523.376 98.703C516.032 93.781 506.095 95.75 501.173 103.094S498.22 120.375 505.564 125.297C549.673 154.828 576.001 203.703 576.001 256ZM351.982 447.951L217.087 328.043L207.997 319.963H112.001C103.179 319.963 96.001 312.803 96.001 304.002V208.002C96.001 199.201 103.179 192.041 112.001 192.041H135.706L98.046 162.309C78.392 168.316 64.001 186.385 64.001 208.002V304.002C64.001 330.51 85.491 352 112.001 352H195.841L330.735 471.906C336.72 477.219 344.314 480 352.001 480C356.439 480 360.907 479.094 365.11 477.188C376.61 472.031 384.001 460.594 384.001 448V388.072L351.985 362.795L351.982 447.951ZM633.925 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.081 508.562C617.019 510.875 620.519 512 623.987 512C628.722 512 633.409 509.906 636.566 505.922C642.034 498.984 640.847 488.92 633.925 483.436Z" })
  }
));
VolumeSlashLight.displayName = "VolumeSlashLight";
var VolumeSlash_default = VolumeSlashLight;
