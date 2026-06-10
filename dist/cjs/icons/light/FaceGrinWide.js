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
var FaceGrinWide_exports = {};
__export(FaceGrinWide_exports, {
  default: () => FaceGrinWide_default
});
module.exports = __toCommonJS(FaceGrinWide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceGrinWideLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM379.152 304.75C348.879 314.5 303.953 320 256 320S163.121 314.5 132.848 304.75C127.641 303.125 121.707 304.25 117.59 307.875C113.352 311.625 111.414 317.125 112.262 322.75C121.465 377.75 195.453 416 256.121 416C316.668 416 390.656 377.75 399.859 322.75C400.828 317.25 398.77 311.625 394.652 307.875C390.293 304.25 384.359 303 379.152 304.75ZM256 384C221.004 384 178.984 367.75 157.551 343.75C214.949 354.5 297.051 354.5 354.57 343.75C333.016 367.75 290.996 384 256 384ZM176 256C184.844 256 192 248.844 192 240V144C192 135.156 184.844 128 176 128S160 135.156 160 144V240C160 248.844 167.156 256 176 256ZM336 256C344.844 256 352 248.844 352 240V144C352 135.156 344.844 128 336 128S320 135.156 320 144V240C320 248.844 327.156 256 336 256Z" })
  }
));
FaceGrinWideLight.displayName = "FaceGrinWideLight";
var FaceGrinWide_default = FaceGrinWideLight;
