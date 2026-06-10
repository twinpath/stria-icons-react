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
var BanSmoking_exports = {};
__export(BanSmoking_exports, {
  default: () => BanSmoking_default
});
module.exports = __toCommonJS(BanSmoking_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BanSmokingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 320H218.25L122.25 224H112C103.25 224 96 231.25 96 240V304C96 312.75 103.25 320 112 320ZM320.625 128C305 128 292 116.75 289.25 102.125C288.5 98.5 285.25 96 281.5 96H265.25C260.25 96 256.625 100.5 257.25 105.375C261.875 136.25 288.5 160 320.625 160C336.25 160 349.25 171.25 352 185.875C352.75 189.5 356 192 359.75 192H375.875C380.875 192 384.625 187.5 383.875 182.625C379.25 151.75 352.75 128 320.625 128ZM256 0C114.625 0 0 114.625 0 256S114.625 512 256 512S512 397.375 512 256S397.375 0 256 0ZM256 464C141.25 464 48 370.75 48 256C48 207.25 65 162.5 93.125 127L385 418.875C349.5 447 304.75 464 256 464ZM289.875 256H384V288H321.875L289.875 256ZM418.875 385L353.875 320H400C408.75 320 416 312.75 416 304V240C416 231.25 408.75 224 400 224H257.875L127 93.125C162.5 65 207.25 48 256 48C370.75 48 464 141.25 464 256C464 304.75 447 349.5 418.875 385Z" })
  }
));
BanSmokingRegular.displayName = "BanSmokingRegular";
var BanSmoking_default = BanSmokingRegular;
