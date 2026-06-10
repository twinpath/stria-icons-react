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
var CircleCaretRight_exports = {};
__export(CircleCaretRight_exports, {
  default: () => CircleCaretRight_default
});
module.exports = __toCommonJS(CircleCaretRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleCaretRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM239.76 144.734C234.551 140.146 227.805 137.602 220.803 137.602C216.668 137.602 212.658 138.469 208.889 140.18C198.629 144.834 192 155.125 192 166.4V345.6C192 356.873 198.629 367.166 208.891 371.82C212.66 373.531 216.668 374.398 220.803 374.398C227.807 374.398 234.553 371.854 239.799 367.232L342.16 277.666C348.41 272.207 352 264.307 352 256S348.41 239.793 342.152 234.326L239.76 144.734ZM331.625 265.625L229.225 355.225C226.852 357.314 223.844 358.398 220.803 358.398C219.006 358.398 217.199 358.02 215.5 357.25C210.926 355.174 208 350.625 208 345.6V166.4C208 161.375 210.926 156.824 215.5 154.75C217.199 153.979 219.008 153.602 220.803 153.602C223.846 153.602 226.852 154.684 229.225 156.775L331.625 246.375C334.4 248.799 336 252.299 336 256C336 259.699 334.4 263.199 331.625 265.625Z" })
  }
));
CircleCaretRightThin.displayName = "CircleCaretRightThin";
var CircleCaretRight_default = CircleCaretRightThin;
