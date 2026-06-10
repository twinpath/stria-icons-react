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
var ImagePortrait_exports = {};
__export(ImagePortrait_exports, {
  default: () => ImagePortrait_default
});
module.exports = __toCommonJS(ImagePortrait_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ImagePortraitRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 256C227.346 256 256 227.346 256 192S227.346 128 192 128S128 156.654 128 192S156.654 256 192 256ZM320 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V64C384 28.652 355.348 0 320 0ZM336 448C336 456.822 328.822 464 320 464H64C55.178 464 48 456.822 48 448V64C48 55.178 55.178 48 64 48H320C328.822 48 336 55.178 336 64V448ZM224 288H160C115.816 288 80 323.816 80 368C80 376.836 87.164 384 96 384H288C296.836 384 304 376.836 304 368C304 323.816 268.184 288 224 288Z" })
  }
));
ImagePortraitRegular.displayName = "ImagePortraitRegular";
var ImagePortrait_default = ImagePortraitRegular;
