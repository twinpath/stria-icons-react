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
var Gif_exports = {};
__export(Gif_exports, {
  default: () => Gif_default
});
module.exports = __toCommonJS(Gif_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GifLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM544 416C544 433.645 529.645 448 512 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H512C529.645 64 544 78.355 544 96V416ZM464 160H368C359.156 160 352 167.156 352 176V336C352 344.844 359.156 352 368 352S384 344.844 384 336V272H440C448.844 272 456 264.844 456 256S448.844 240 440 240H384V192H464C472.844 192 480 184.844 480 176S472.844 160 464 160ZM304 160C295.156 160 288 167.156 288 176V336C288 344.844 295.156 352 304 352S320 344.844 320 336V176C320 167.156 312.844 160 304 160ZM240 240H176C167.156 240 160 247.156 160 256S167.156 272 176 272H224V305.453C199.172 325.359 154.875 323.609 132.516 301.25C107.562 276.297 107.562 235.703 132.516 210.75C157.547 185.75 196.703 185.75 221.734 210.75C227.984 217 238.109 217 244.359 210.75S250.609 194.375 244.359 188.125C206.672 150.406 147.578 150.406 109.891 188.125C72.469 225.547 72.469 286.453 109.891 323.875C127.766 341.75 153.531 352 180.609 352C207.672 352 233.453 341.75 251.313 323.875C254.312 320.875 256 316.797 256 312.562V256C256 247.156 248.844 240 240 240Z" })
  }
));
GifLight.displayName = "GifLight";
var Gif_default = GifLight;
