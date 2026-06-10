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
var NotesMedical_exports = {};
__export(NotesMedical_exports, {
  default: () => NotesMedical_default
});
module.exports = __toCommonJS(NotesMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NotesMedicalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M354.666 261.332H314.666V221.332C314.666 214 308.668 208 301.334 208H274.666C267.332 208 261.334 214 261.334 221.332V261.332H221.334C214 261.332 208 267.332 208 274.664V301.332C208 308.664 214 314.664 221.334 314.664H261.334V354.664C261.334 361.996 267.332 368 274.666 368H301.334C308.668 368 314.666 361.996 314.666 354.664V314.664H354.666C362 314.664 368 308.664 368 301.332V274.664C368 267.332 362 261.332 354.666 261.332ZM336 0H64C28.656 0 0 28.656 0 64V336C0 362.508 21.492 384 48 384V80C48 62.328 62.328 48 80 48H384C384 21.492 362.508 0 336 0ZM416.02 96H160.02C124.676 96 96.021 124.648 96.02 159.996L96 415.996C95.998 451.344 124.652 480 160 480H386.766C395.252 480 403.391 476.629 409.393 470.625L470.646 409.375C476.648 403.371 480.02 395.234 480.02 386.746V160C480.02 124.801 451.219 96 416.02 96ZM432.02 380.121L380.135 432H160C154.234 432 150.436 429.062 148.686 427.312S144 421.766 144 416L144.02 160C144.02 151.176 151.197 144 160.02 144H416.02C424.693 144 432.02 151.328 432.02 160V380.121Z" })
  }
));
NotesMedicalRegular.displayName = "NotesMedicalRegular";
var NotesMedical_default = NotesMedicalRegular;
