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
var ArrowsUpDown_exports = {};
__export(ArrowsUpDown_exports, {
  default: () => ArrowsUpDown_default
});
module.exports = __toCommonJS(ArrowsUpDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsUpDownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M54.625 361.375L96 402.75V256H160V402.75L201.375 361.375C213.875 348.875 234.125 348.875 246.625 361.375C252.875 367.625 256 375.812 256 384S252.875 400.375 246.625 406.625L150.625 502.625C138.125 515.125 117.875 515.125 105.375 502.625L9.375 406.625C-3.125 394.125 -3.125 373.875 9.375 361.375S42.125 348.875 54.625 361.375Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.375 150.625C-3.125 138.125 -3.125 117.875 9.375 105.375L105.375 9.375C117.875 -3.125 138.125 -3.125 150.625 9.375L246.625 105.375C252.875 111.625 256 119.812 256 128S252.875 144.375 246.625 150.625C234.125 163.125 213.875 163.125 201.375 150.625L160 109.25V256H96V109.25L54.625 150.625C42.125 163.125 21.875 163.125 9.375 150.625Z" })
    ]
  }
));
ArrowsUpDownDuotone.displayName = "ArrowsUpDownDuotone";
var ArrowsUpDown_default = ArrowsUpDownDuotone;
