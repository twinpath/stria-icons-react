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
var SquareCaretDown_exports = {};
__export(SquareCaretDown_exports, {
  default: () => SquareCaretDown_default
});
module.exports = __toCommonJS(SquareCaretDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareCaretDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H384C419.344 480 448 451.346 448 416V96C448 60.654 419.344 32 384 32ZM432 416C432 442.467 410.469 464 384 464H64C37.531 464 16 442.467 16 416V96C16 69.533 37.531 48 64 48H384C410.469 48 432 69.533 432 96V416ZM313.602 192H134.398C123.125 192 112.828 198.631 108.18 208.893C103.508 219.201 105.309 231.332 112.773 239.803L202.336 342.16C207.797 348.41 215.695 352 224 352S240.203 348.41 245.672 342.154L335.266 239.76C342.691 231.332 344.492 219.201 339.82 208.893C335.172 198.631 324.875 192 313.602 192ZM323.227 229.225L233.625 331.625C231.199 334.4 227.699 336 224 336S216.801 334.4 214.375 331.625L124.773 229.225C121.449 225.449 120.676 220.074 122.75 215.5C124.824 210.924 129.375 208 134.398 208H313.602C318.625 208 323.176 210.924 325.25 215.5C327.324 220.074 326.551 225.449 323.227 229.225Z" })
  }
));
SquareCaretDownThin.displayName = "SquareCaretDownThin";
var SquareCaretDown_default = SquareCaretDownThin;
