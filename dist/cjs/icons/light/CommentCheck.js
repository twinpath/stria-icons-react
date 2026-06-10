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
var CommentCheck_exports = {};
__export(CommentCheck_exports, {
  default: () => CommentCheck_default
});
module.exports = __toCommonJS(CommentCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentCheckLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.034 32C114.678 32 0.067 125.125 0.067 240C0.067 287.625 19.94 331.25 52.936 366.25C38.063 405.75 7.067 439.125 6.567 439.5C-0.056 446.5 -1.806 456.75 1.942 465.5C5.817 474.25 14.315 480 23.94 480C85.432 480 133.924 454.25 163.045 433.75C192.041 442.75 223.287 448 256.034 448C397.389 448 512 354.875 512 240S397.389 32 256.034 32ZM256.034 416C227.787 416 199.791 411.75 172.795 403.25C163.278 400.182 152.871 401.789 144.725 407.588L144.674 407.625C121.676 423.875 86.182 442.875 42.061 447.25C54.061 432.125 71.809 406.75 82.807 377.625L82.936 377.285C87.219 366.014 84.725 353.287 76.506 344.463L76.307 344.25C47.311 313.75 32.063 277.625 32.063 240C32.063 143 132.549 64 256.034 64S480.004 143 480.004 240S379.518 416 256.034 416ZM324.688 175.344L229.329 270.719L187.313 228.688C181.063 222.438 170.938 222.438 164.688 228.688S158.438 245.063 164.688 251.312L218.016 304.656C221.016 307.656 225.079 309.344 229.329 309.344S237.641 307.656 240.641 304.656L347.313 197.969C353.563 191.719 353.563 181.594 347.313 175.344S330.938 169.094 324.688 175.344Z" })
  }
));
CommentCheckLight.displayName = "CommentCheckLight";
var CommentCheck_default = CommentCheckLight;
