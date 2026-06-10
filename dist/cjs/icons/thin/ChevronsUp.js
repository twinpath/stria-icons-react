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
var ChevronsUp_exports = {};
__export(ChevronsUp_exports, {
  default: () => ChevronsUp_default
});
module.exports = __toCommonJS(ChevronsUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChevronsUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.934 285.226L224 51.82L434.066 285.226C435.629 286.976 437.816 287.867 440.004 287.867C441.91 287.867 443.817 287.195 445.348 285.82C448.629 282.851 448.91 277.805 445.942 274.508L229.938 34.508C226.938 31.164 221.062 31.164 218.062 34.508L2.058 274.508C-0.91 277.805 -0.629 282.851 2.652 285.82C5.933 288.805 11.027 288.508 13.934 285.226ZM229.938 226.623C226.938 223.279 221.062 223.279 218.062 226.623L2.058 466.623C-0.91 469.92 -0.629 474.967 2.652 477.935C5.933 480.92 11.027 480.623 13.934 477.342L224 243.935L434.066 477.342C435.629 479.092 437.816 479.982 440.004 479.982C441.91 479.982 443.817 479.31 445.348 477.935C448.629 474.967 448.91 469.92 445.942 466.623L229.938 226.623Z" })
  }
));
ChevronsUpThin.displayName = "ChevronsUpThin";
var ChevronsUp_default = ChevronsUpThin;
