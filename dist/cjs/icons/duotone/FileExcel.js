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
var FileExcel_exports = {};
__export(FileExcel_exports, {
  default: () => FileExcel_default
});
module.exports = __toCommonJS(FileExcel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileExcelDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM272.994 423.613C279.555 434.273 271.885 448 259.367 448H232.941C227.385 448 222.227 445.117 219.314 440.383L192 396L164.686 440.383C161.773 445.117 156.615 448 151.059 448H124.633C112.115 448 104.447 434.273 111.006 423.613L160 344L111.006 264.383C104.447 253.727 112.115 240 124.633 240H151.059C156.615 240 161.773 242.883 164.686 247.613L192 292L219.314 247.613C222.227 242.883 227.385 240 232.941 240H259.367C271.885 240 279.555 253.727 272.994 264.383L224 344L272.994 423.613Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M259.759 240H233.334C227.777 240 222.619 242.883 219.707 247.613L192.392 292L165.078 247.613C162.166 242.883 157.007 240 151.451 240H125.025C112.507 240 104.839 253.727 111.398 264.383L160.392 344L111.398 423.613C104.839 434.273 112.507 448 125.025 448H151.451C157.007 448 162.166 445.117 165.078 440.383L192.392 396L219.707 440.383C222.619 445.117 227.777 448 233.334 448H259.759C272.277 448 279.947 434.273 273.386 423.613L224.392 344L273.386 264.383C279.947 253.727 272.277 240 259.759 240ZM256.392 0V128H384.392L256.392 0Z" })
    ]
  }
));
FileExcelDuotone.displayName = "FileExcelDuotone";
var FileExcel_default = FileExcelDuotone;
