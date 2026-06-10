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
var CircleCaretLeft_exports = {};
__export(CircleCaretLeft_exports, {
  default: () => CircleCaretLeft_default
});
module.exports = __toCommonJS(CircleCaretLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleCaretLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM303.111 140.18C299.34 138.469 295.332 137.602 291.197 137.602H291.195C284.193 137.602 277.447 140.146 272.201 144.768L169.84 234.334C163.59 239.793 160 247.693 160 256S163.59 272.207 169.848 277.674L272.24 367.266C277.449 371.854 284.195 374.398 291.197 374.398C295.332 374.398 299.342 373.531 303.111 371.82C313.371 367.166 320 356.873 320 345.6V166.4C320 155.127 313.371 144.834 303.111 140.18ZM304 345.6C304 350.625 301.074 355.174 296.5 357.25C294.803 358.02 292.992 358.398 291.197 358.398C288.154 358.398 285.148 357.314 282.775 355.225L180.375 265.625C177.6 263.199 176 259.699 176 256C176 252.299 177.6 248.799 180.375 246.375L282.775 156.775C285.148 154.686 288.156 153.602 291.197 153.602C292.994 153.602 294.801 153.979 296.5 154.75C301.074 156.824 304 161.375 304 166.4V345.6Z" })
  }
));
CircleCaretLeftThin.displayName = "CircleCaretLeftThin";
var CircleCaretLeft_default = CircleCaretLeftThin;
