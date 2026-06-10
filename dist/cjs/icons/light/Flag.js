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
var Flag_exports = {};
__export(Flag_exports, {
  default: () => Flag_default
});
module.exports = __toCommonJS(Flag_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlagLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M498.535 6.234C478.777 -5.758 459.604 3.02 456.914 4.246C415.16 23.305 380.9 32.18 349.092 32.18C320.168 32.18 297.35 24.852 273.193 17.086C247.523 8.844 220.979 0.316 185.211 0.312C159.012 0.312 121.332 2.641 32 38.836V16.008C32 7.172 24.836 0.012 16 0.012S0 7.172 0 16.008V496C0 504.836 7.164 512 16 512S32 504.836 32 496V391.094C46.475 384.652 109.742 352.164 180.844 352.164C217.648 352.164 247.982 359.875 280.096 368.047C310.834 375.867 342.586 383.945 379.4 383.945C414.859 383.945 451.482 376.391 491.365 360.852H491.367C503.648 356.07 511.74 344.246 511.75 331.066L512 32.352C512.008 22.008 507.375 11.598 498.535 6.234ZM479.748 331.039C443.639 345.105 410.816 351.945 379.4 351.945C346.594 351.945 318.141 344.707 288.014 337.043C255.395 328.746 221.668 320.164 180.844 320.164C134.953 320.164 87.238 331.477 34.973 354.746L32 356.07V73.367L60.01 62.016C109.348 42.031 150.303 32.312 185.207 32.312C215.951 32.312 239.004 39.719 263.406 47.555C288.848 55.727 315.156 64.18 349.092 64.18C418.52 64.18 479.998 32.008 479.998 32.008L479.748 331.039Z" })
  }
));
FlagLight.displayName = "FlagLight";
var Flag_default = FlagLight;
