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
const ImagePortraitThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 0H48C21.49 0 0 21.49 0 48V464C0 490.51 21.49 512 48 512H336C362.51 512 384 490.51 384 464V48C384 21.49 362.51 0 336 0ZM368 464C368 481.645 353.645 496 336 496H48C30.355 496 16 481.645 16 464V48C16 30.355 30.355 16 48 16H336C353.645 16 368 30.355 368 48V464ZM192 256C227.346 256 256 227.346 256 192S227.346 128 192 128S128 156.654 128 192S156.654 256 192 256ZM192 144C218.467 144 240 165.533 240 192S218.467 240 192 240S144 218.467 144 192S165.533 144 192 144ZM224 288H160C115.816 288 80 323.816 80 368C80 376.836 87.164 384 96 384H288C296.836 384 304 376.836 304 368C304 323.816 268.184 288 224 288ZM96 368C96 332.711 124.711 304 160 304H224C259.289 304 288 332.711 288 368H96Z" })
  }
));
ImagePortraitThin.displayName = "ImagePortraitThin";
var ImagePortrait_default = ImagePortraitThin;
