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
var LinkSimpleSlash_exports = {};
__export(LinkSimpleSlash_exports, {
  default: () => LinkSimpleSlash_default
});
module.exports = __toCommonJS(LinkSimpleSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LinkSimpleSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M264 368H160C98.25 368 48 317.75 48 256C48 220.268 65.135 188.75 91.279 168.229L52.795 138.066C20.6 167.355 0 209.154 0 256C0 344.219 71.781 416 160 416H264C277.25 416 288 405.25 288 392S277.25 368 264 368ZM544.953 401.809C600.877 376.945 640 321.068 640 256C640 167.781 568.219 96 480 96H376C362.75 96 352 106.75 352 120S362.75 144 376 144H480C541.75 144 592 194.25 592 256C592 311.133 551.861 356.828 499.324 366.047L389.541 280H424C437.25 280 448 269.25 448 256S437.25 232 424 232H328.299L216.021 144H264C277.25 144 288 133.25 288 120S277.25 96 264 96H160C158.352 96 156.76 96.219 155.125 96.271L38.814 5.109C34.408 1.672 29.189 0 24.033 0C16.908 0 9.846 3.156 5.127 9.188C-3.061 19.625 -1.248 34.717 9.189 42.889L601.186 506.883C611.686 515.086 626.748 513.211 634.873 502.805C643.061 492.367 641.248 477.273 630.811 469.102L544.953 401.809Z" })
  }
));
LinkSimpleSlashRegular.displayName = "LinkSimpleSlashRegular";
var LinkSimpleSlash_default = LinkSimpleSlashRegular;
