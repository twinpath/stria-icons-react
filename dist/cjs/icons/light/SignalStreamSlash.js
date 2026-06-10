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
var SignalStreamSlash_exports = {};
__export(SignalStreamSlash_exports, {
  default: () => SignalStreamSlash_default
});
module.exports = __toCommonJS(SignalStreamSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignalStreamSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M633.925 483.438L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.081 508.562C617.019 510.875 620.519 512 623.987 512C628.722 512 633.409 509.906 636.566 505.922C642.034 498.984 640.847 488.922 633.925 483.438ZM576.001 256.006C576.001 291.939 567.691 326.521 552.411 357.91L578.169 378.246C597.597 340.922 608.001 299.268 608.001 256.006C608.001 185.32 580.517 118.791 530.61 68.73C524.36 62.418 514.235 62.449 507.985 68.668C501.735 74.918 501.704 85.041 507.954 91.291C551.829 135.354 576.001 193.82 576.001 256.006ZM480.001 256.006C480.001 269.723 477.501 282.992 473.864 295.896L500.845 317.197C507.915 297.76 512.001 277.189 512.001 256.006C512.001 210.068 494.642 166.383 463.126 133.01C457.064 126.635 446.97 126.291 440.517 132.385C434.095 138.447 433.798 148.57 439.876 155.008C465.751 182.383 480.001 218.256 480.001 256.006ZM160.001 256.006C160.001 242.275 162.503 228.994 166.148 216.08L139.169 194.779C132.091 214.227 128.001 234.809 128.001 256.006C128.001 301.941 145.36 345.627 176.876 379.002C180.017 382.314 184.251 384.002 188.501 384.002C192.439 384.002 196.392 382.564 199.485 379.627C205.907 373.564 206.204 363.439 200.126 357.002C174.251 329.629 160.001 293.754 160.001 256.006ZM64.001 256.006C64.001 220.061 72.316 185.467 87.605 154.07L61.847 133.734C42.407 171.066 32.001 212.732 32.001 256.006C32.001 326.691 59.485 393.221 109.392 443.281C112.517 446.438 116.61 448 120.72 448C124.798 448 128.892 446.438 132.017 443.344C138.267 437.094 138.298 426.969 132.048 420.719C88.173 376.658 64.001 318.191 64.001 256.006Z" })
  }
));
SignalStreamSlashLight.displayName = "SignalStreamSlashLight";
var SignalStreamSlash_default = SignalStreamSlashLight;
