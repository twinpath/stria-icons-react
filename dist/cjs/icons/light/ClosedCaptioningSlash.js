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
var ClosedCaptioningSlash_exports = {};
__export(ClosedCaptioningSlash_exports, {
  default: () => ClosedCaptioningSlash_default
});
module.exports = __toCommonJS(ClosedCaptioningSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClosedCaptioningSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M495.564 188.123C459.314 151.873 396.064 151.873 359.814 188.123C356.458 191.48 353.759 195.217 351.005 198.916L375.991 218.643C377.964 215.914 379.982 213.203 382.439 210.748C406.626 186.561 448.751 186.561 472.939 210.748C479.189 216.998 489.314 216.998 495.564 210.748S501.814 194.373 495.564 188.123ZM543.999 64C561.644 64 575.999 78.355 575.999 96V376.549L607.999 401.812V96C607.999 60.652 579.345 32 543.999 32H139.583L180.114 64H543.999ZM95.999 448C78.355 448 63.999 433.645 63.999 416V135.432L31.999 110.166V416C31.999 451.346 60.653 480 95.999 480H500.439L459.907 448H95.999ZM153.853 206.371C131.493 243.289 135.966 292.012 167.814 323.873C185.939 341.998 210.048 351.998 235.689 351.998C261.142 351.998 285.054 342.1 303.134 324.227L277.519 304.006C252.956 325.135 213.575 324.385 190.439 301.248C170.192 281.016 166.669 250.568 179.275 226.439L153.853 206.371ZM633.921 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.077 508.562C617.015 510.875 620.515 512 623.984 512C628.718 512 633.405 509.906 636.562 505.922C642.03 498.984 640.843 488.92 633.921 483.436Z" })
  }
));
ClosedCaptioningSlashLight.displayName = "ClosedCaptioningSlashLight";
var ClosedCaptioningSlash_default = ClosedCaptioningSlashLight;
