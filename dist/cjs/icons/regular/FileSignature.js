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
var FileSignature_exports = {};
__export(FileSignature_exports, {
  default: () => FileSignature_default
});
module.exports = __toCommonJS(FileSignature_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileSignatureRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48.018 448L48 64.125C48 55.289 55.164 48.125 64 48.125H224.008V128C224.008 145.672 238.334 160 256.008 160H336.002V254.18L384 206.469V138.641C384 121.664 377.258 105.383 365.256 93.383L290.627 18.746C278.625 6.742 262.348 0 245.373 0H64C28.654 0 0 28.652 0 64L0.02 448C0.02 483.344 28.674 512 64.02 512H320C349.646 512 374.527 491.477 381.711 464H64.018C55.18 464 48.018 456.836 48.018 448ZM292.727 342.305C289.701 345.312 288 349.398 288 353.66V384H272.75C268.625 384 264.625 381.5 262.625 377.5C250.75 353.625 216.375 347.125 196.625 363.375L182.75 321.75C179.5 311.875 170.375 305.25 160 305.25S140.5 311.875 137.25 321.75L119 376.375C117.5 380.875 113.25 384 108.375 384H96C87.125 384 80 391.125 80 400S87.125 416 96 416H108.375C127 416 143.5 404.125 149.375 386.5L160 354.625L176.875 405C178.875 411.25 184.375 415.5 190.875 416H192C197.999 416 203.625 412.625 206.25 407.125L213.999 391.75C216.75 386.25 221.875 385.625 224 385.625S231.25 386.25 234.125 392.125C241.5 406.875 256.375 416 272.75 416H350.34C354.604 416 358.689 414.297 361.693 411.273L518.625 253.25L450.75 185.375L292.727 342.305ZM568.5 167.375L536.625 135.5C526.75 125.5 510.625 125.5 500.625 135.5L473.375 162.75L541.25 230.625L568.5 203.375C578.5 193.375 578.5 177.25 568.5 167.375Z" })
  }
));
FileSignatureRegular.displayName = "FileSignatureRegular";
var FileSignature_default = FileSignatureRegular;
