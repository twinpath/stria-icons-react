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
var Dna_exports = {};
__export(Dna_exports, {
  default: () => Dna_default
});
module.exports = __toCommonJS(Dna_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DnaSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0.114 494.123C-1.011 503.623 6.364 511.873 15.989 511.873L48.241 511.998C56.366 511.998 63.242 506.123 64.242 498.123C64.992 493.248 66.117 486.998 67.742 479.998H380.008C381.633 486.873 382.883 493.248 383.508 498.123C384.633 506.123 391.384 512.123 399.509 511.998L431.761 511.873C441.386 511.873 448.886 503.623 447.761 494.123C443.136 456.248 422.135 365.124 328.755 286.375C311.254 298.75 291.753 310.625 270.252 321.75C276.503 326.374 281.753 331.249 287.253 335.999H159.747C180.998 317.875 206.749 300.375 238.376 284.625C410.51 199.125 442.136 65.751 447.886 17.877C449.011 8.377 441.636 0.127 432.011 0.127L399.634 0.002C391.509 0.002 384.758 5.877 383.633 13.877C382.883 18.752 381.758 25.002 380.258 32.002H67.742C66.242 25.002 65.117 18.877 64.367 13.877C63.242 5.877 56.491 -0.123 48.366 0.002L16.114 0.127C6.489 0.127 -1.011 8.377 0.114 17.877C5.239 60.751 31.365 171.751 159.997 256C31.49 340.249 5.239 451.249 0.114 494.123ZM224 219.625C198.874 205.875 177.623 191.25 159.747 176.001H288.253C270.377 191.25 249.126 206 224 219.625ZM355.132 96.001C349.256 106.376 342.256 117.126 334.131 128.001H113.994C105.744 117.126 98.744 106.376 92.993 96.001H355.132ZM92.868 415.999C98.744 405.624 105.744 394.874 113.869 383.999H333.256C341.631 394.874 348.756 405.624 354.507 415.999H92.868Z" })
  }
));
DnaSolid.displayName = "DnaSolid";
var Dna_default = DnaSolid;
