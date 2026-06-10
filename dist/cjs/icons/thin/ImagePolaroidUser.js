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
const ImagePolaroidUserThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 32H48C21.49 32 0 53.492 0 80V432C0 458.508 21.49 480 48 480H400C426.51 480 448 458.508 448 432V80C448 53.492 426.51 32 400 32ZM432 432C432 449.645 417.645 464 400 464H48C30.355 464 16 449.645 16 432V352H432V432ZM130.574 336C137.711 308.5 162.295 288 192 288H256C285.705 288 310.289 308.5 317.426 336H130.574ZM432 336H333.629C326.174 299.59 294.621 272 256 272H192C153.383 272 121.828 299.59 114.371 336H16V80C16 62.355 30.355 48 48 48H400C417.645 48 432 62.355 432 80V336ZM224 112C188.656 112 160 140.656 160 176S188.656 240 224 240C259.348 240 288 211.344 288 176S259.348 112 224 112ZM224 224C197.531 224 176 202.469 176 176S197.531 128 224 128S272 149.531 272 176S250.469 224 224 224Z" })
  }
));
ImagePolaroidUserThin.displayName = "ImagePolaroidUserThin";
var ImagePolaroidUser_default = ImagePolaroidUserThin;
