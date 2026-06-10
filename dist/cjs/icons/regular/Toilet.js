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
var Toilet_exports = {};
__export(Toilet_exports, {
  default: () => Toilet_default
});
module.exports = __toCommonJS(Toilet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToiletRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 80H128C119.156 80 112 87.156 112 96S119.156 112 128 112H176C184.844 112 192 104.844 192 96S184.844 80 176 80ZM424 48C437.25 48 448 37.25 448 24S437.25 0 424 0H24C10.75 0 0 10.75 0 24S10.75 48 24 48H32V212.873C17.035 224.768 8 239.043 8 256C8 307.008 32.516 353.205 72 386.562V472C72 494.062 89.938 512 112 512H336C358.062 512 376 494.062 376 472V386.562C415.484 353.205 440 307.008 440 256C440 239.043 430.965 224.768 416 212.873V48H424ZM80 48H368V188.369C327.381 174.617 274.789 168 224 168S120.619 174.617 80 188.369V48ZM328 464H120V417.176C150.877 431.691 186.311 440 224 440S297.123 431.691 328 417.176V464ZM224 392C161.742 392 107.904 364.123 78.885 323.277C119.65 337.283 172.758 344 224 344S328.35 337.283 369.115 323.277C340.096 364.123 286.258 392 224 392ZM224 296C116.498 296 59.896 266.986 56.076 256.609C56.074 256.504 56.039 256.41 56.039 256.305C59.729 245.096 116.361 216 224 216C330.562 216 387.188 244.531 391.875 256C387.188 267.469 330.562 296 224 296Z" })
  }
));
ToiletRegular.displayName = "ToiletRegular";
var Toilet_default = ToiletRegular;
