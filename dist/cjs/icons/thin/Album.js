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
var Album_exports = {};
__export(Album_exports, {
  default: () => Album_default
});
module.exports = __toCommonJS(Album_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AlbumThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32.001H64C28.654 32.001 0 60.653 0 96.001V416.001C0 451.346 28.654 480.001 64 480.001H384C419.346 480.001 448 451.346 448 416.001V96.001C448 60.653 419.346 32.001 384 32.001ZM432 416.001C432 442.468 410.467 464.001 384 464.001H64C37.533 464.001 16 442.468 16 416.001V96.001C16 69.534 37.533 48.001 64 48.001H384C410.467 48.001 432 69.534 432 96.001V416.001ZM224 224.001C206.326 224.001 192 238.327 192 256.001C192 273.673 206.326 288.001 224 288.001S256 273.673 256 256.001C256 238.327 241.674 224.001 224 224.001ZM224 272.001C215.178 272.001 208 264.823 208 256.001S215.178 240.001 224 240.001S240 247.178 240 256.001S232.822 272.001 224 272.001ZM224 96.001C135.635 96.001 64 167.635 64 256.001S135.635 416.001 224 416.001S384 344.366 384 256.001S312.365 96.001 224 96.001ZM224 400.001C144.598 400.001 80 335.403 80 256.001S144.598 112.001 224 112.001S368 176.598 368 256.001S303.402 400.001 224 400.001Z" })
  }
));
AlbumThin.displayName = "AlbumThin";
var Album_default = AlbumThin;
