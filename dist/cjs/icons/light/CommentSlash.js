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
var CommentSlash_exports = {};
__export(CommentSlash_exports, {
  default: () => CommentSlash_default
});
module.exports = __toCommonJS(CommentSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.033 416C291.787 416 263.791 411.75 236.795 403.25C227.279 400.182 216.873 401.789 208.726 407.588L208.674 407.625C185.678 423.875 150.182 442.875 106.062 447.25C118.06 432.125 135.808 406.75 146.807 377.625L146.935 377.285C151.219 366.014 148.726 353.287 140.506 344.463L140.308 344.25C111.312 313.75 96.064 277.625 96.064 240C96.064 216.592 102.033 194.277 112.646 173.824L87.289 153.803C72.517 180.09 64.068 209.215 64.068 240C64.068 287.625 83.941 331.25 116.935 366.25C102.062 405.75 71.066 439.125 70.566 439.5C63.943 446.5 62.193 456.75 65.943 465.5C69.816 474.25 78.316 480 87.939 480C149.432 480 197.926 454.25 227.047 433.75C256.043 442.75 287.289 448 320.033 448C360.535 448 398.695 440.146 432.738 426.535L403.252 403.256C377.492 411.398 349.451 416 320.033 416ZM320.033 64C443.517 64 544.004 143 544.004 240C544.004 271.9 532.969 301.768 513.988 327.604L538.98 347.334C562.32 315.969 576 279.328 576 240C576 125.125 461.391 32 320.033 32C268.992 32 221.555 44.279 181.625 65.203L209.439 87.162C242.107 72.5 279.803 64 320.033 64ZM633.908 483.436L25.904 3.418C18.998 -2.02 8.935 -0.848 3.435 6.059C-2.033 12.996 -0.846 23.061 6.092 28.545L614.096 508.563C617.033 510.875 620.533 512 624.002 512C628.721 512 633.408 509.906 636.564 505.922C642.033 498.984 640.846 488.92 633.908 483.436Z" })
  }
));
CommentSlashLight.displayName = "CommentSlashLight";
var CommentSlash_default = CommentSlashLight;
