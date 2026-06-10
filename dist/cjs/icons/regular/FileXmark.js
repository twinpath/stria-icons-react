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
var FileXmark_exports = {};
__export(FileXmark_exports, {
  default: () => FileXmark_default
});
module.exports = __toCommonJS(FileXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileXmarkRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M365.258 93.383L290.625 18.746C278.625 6.742 262.348 0 245.375 0H64C28.656 0 0 28.652 0 64L0.02 448C0.02 483.344 28.672 512 64.02 512H320C355.199 512 384 483.199 384 448V138.641C384 121.664 377.258 105.383 365.258 93.383ZM336 448C336 456.836 328.836 464 320 464H64.016C55.18 464 48.016 456.836 48.016 448L48 64.125C48 55.289 55.164 48.125 64 48.125H224.008V128C224.008 145.672 238.336 160 256.008 160H336V448ZM239.031 239.031L192 286.062L144.969 239.031C135.594 229.656 120.406 229.656 111.031 239.031S101.656 263.594 111.031 272.969L158.062 320L111.031 367.031C101.656 376.406 101.656 391.594 111.031 400.969C120.406 410.34 135.586 410.348 144.969 400.969L192 353.938L239.031 400.969C248.406 410.34 263.586 410.348 272.969 400.969C282.344 391.594 282.344 376.406 272.969 367.031L225.938 320L272.969 272.969C282.344 263.594 282.344 248.406 272.969 239.031S248.406 229.656 239.031 239.031Z" })
  }
));
FileXmarkRegular.displayName = "FileXmarkRegular";
var FileXmark_default = FileXmarkRegular;
