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
var Stopwatch20_exports = {};
__export(Stopwatch20_exports, {
  default: () => Stopwatch20_default
});
module.exports = __toCommonJS(Stopwatch20_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Stopwatch20Regular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424.969 152.969C434.344 143.594 434.344 128.406 424.969 119.031S400.406 109.656 391.031 119.031L361.682 148.383C330.627 120.883 291.4 102.484 248 97.492V48H280C293.25 48 304 37.25 304 24S293.25 0 280 0H168C154.75 0 144 10.75 144 24S154.75 48 168 48H200V97.492C96.449 109.406 16 197.254 16 304C16 418.875 109.125 512 224 512S432 418.875 432 304C432 259.32 417.779 218.031 393.805 184.133L424.969 152.969ZM224 464C135.775 464 64 392.223 64 304S135.775 144 224 144S384 215.777 384 304S312.225 464 224 464ZM288 204C259.328 204 236 227.312 236 256V352C236 380.688 259.328 404 288 404S340 380.688 340 352V256C340 227.312 316.672 204 288 204ZM300 352C300 358.625 294.609 364 288 364S276 358.625 276 352V256C276 249.375 281.391 244 288 244S300 249.375 300 256V352ZM212 252C212 225.531 190.469 204 164 204S116 225.531 116 252C116 263.031 124.953 272 136 272S156 263.031 156 252C156 243.188 172 241.125 172 254.062C172 270.344 165.391 286.312 153.844 297.875C134.594 317.125 124 342.719 124 369.938V384C124 395.031 132.953 404 144 404H192C203.047 404 212 395.031 212 384S203.047 364 192 364H164.297C165.687 349.812 172.016 336.281 182.156 326.125C201.406 306.875 212 281.281 212 252Z" })
  }
));
Stopwatch20Regular.displayName = "Stopwatch20Regular";
var Stopwatch20_default = Stopwatch20Regular;
