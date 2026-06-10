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
var BookCopy_exports = {};
__export(BookCopy_exports, {
  default: () => BookCopy_default
});
module.exports = __toCommonJS(BookCopy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookCopyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 464H352V448H304V464H80C62.359 464 48 449.656 48 432S62.359 400 80 400H180.336C170.531 386.006 164.176 369.645 161.617 352H80C68.625 352 57.797 354.375 48 358.688V176C48 158.344 62.359 144 80 144H160V96H80C35.891 96 0 131.875 0 176V432C0 476.125 35.891 512 80 512H360C373.25 512 384 501.25 384 488S373.25 464 360 464ZM552 304C565.25 304 576 293.25 576 280V24C576 10.75 565.25 0 552 0H272C227.891 0 192 35.875 192 80V336C192 380.125 227.891 416 272 416H552C565.25 416 576 405.25 576 392S565.25 368 552 368H544V304H552ZM496 368H272C254.359 368 240 353.656 240 336S254.359 304 272 304H496V368ZM528 256H272C260.625 256 249.797 258.375 240 262.688V80C240 62.344 254.359 48 272 48H528V256Z" })
  }
));
BookCopyRegular.displayName = "BookCopyRegular";
var BookCopy_default = BookCopyRegular;
