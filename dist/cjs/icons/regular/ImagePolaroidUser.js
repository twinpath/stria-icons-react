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
var ImagePolaroidUser_exports = {};
__export(ImagePolaroidUser_exports, {
  default: () => ImagePolaroidUser_default
});
module.exports = __toCommonJS(ImagePolaroidUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ImagePolaroidUserRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V424C0 459.346 28.654 488 64 488H384C419.346 488 448 459.346 448 424C448 413.299 448 96 448 96C448 60.652 419.346 32 384 32ZM400 424C400 432.822 392.822 440 384 440H64C55.178 440 48 432.822 48 424V376H400V424ZM400 328H332.023C321.795 295.604 291.779 272 256 272H192C156.221 272 126.205 295.604 115.977 328H48V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V328ZM224 112C188.654 112 160 140.654 160 176S188.654 240 224 240S288 211.346 288 176S259.346 112 224 112Z" })
  }
));
ImagePolaroidUserRegular.displayName = "ImagePolaroidUserRegular";
var ImagePolaroidUser_default = ImagePolaroidUserRegular;
