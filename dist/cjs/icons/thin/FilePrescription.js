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
var FilePrescription_exports = {};
__export(FilePrescription_exports, {
  default: () => FilePrescription_default
});
module.exports = __toCommonJS(FilePrescription_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilePrescriptionThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M374.629 150.625L233.371 9.375C227.371 3.371 219.23 0 210.746 0H64C28.652 0 0 28.652 0 64V448C0 483.344 28.652 512 64 512H320C355.348 512 384 483.344 384 448V173.254C384 164.766 380.629 156.629 374.629 150.625ZM224 22.629L361.375 160H248C234.781 160 224 149.234 224 136V22.629ZM368 448C368 474.469 346.469 496 320 496H64C37.531 496 16 474.469 16 448V64C16 37.531 37.531 16 64 16H208V136C208 158.062 225.938 176 248 176H368V448ZM190.506 315.195C210.188 306.5 224 286.859 224 264C224 233.125 198.875 208 168 208H104C99.578 208 96 211.594 96 216V376C96 380.406 99.578 384 104 384S112 380.406 112 376V320H168C169.457 320 170.826 319.68 172.256 319.57L228.688 376L178.344 426.344C175.219 429.469 175.219 434.531 178.344 437.656C181.471 440.783 186.529 440.783 189.656 437.656L240 387.312L290.344 437.656C293.471 440.783 298.529 440.783 301.656 437.656C304.781 434.531 304.781 429.469 301.656 426.344L251.312 376L285.656 341.656C288.781 338.531 288.781 333.469 285.656 330.344S277.469 327.219 274.344 330.344L240 364.688L190.506 315.195ZM168 304H112V224H168C190.062 224 208 241.938 208 264S190.062 304 168 304Z" })
  }
));
FilePrescriptionThin.displayName = "FilePrescriptionThin";
var FilePrescription_default = FilePrescriptionThin;
