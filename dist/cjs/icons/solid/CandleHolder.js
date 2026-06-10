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
var CandleHolder_exports = {};
__export(CandleHolder_exports, {
  default: () => CandleHolder_default
});
module.exports = __toCommonJS(CandleHolder_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CandleHolderSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376 368C336.25 368 304 400.25 304 440C304 448.5 305.75 456.5 308.375 464H256V256C256 238.375 241.625 224 224 224H160V272C160 280.875 152.875 288 144 288S128 280.875 128 272V224H96C78.375 224 64 238.375 64 256V464H16C7.125 464 0 471.125 0 480V496C0 504.875 7.125 512 16 512H376C415.75 512 448 479.75 448 440S415.75 368 376 368ZM376 464C362.75 464 352 453.25 352 440S362.75 416 376 416S400 426.75 400 440S389.25 464 376 464ZM160 192C205.875 192 237.999 159.375 237.999 112.75C237.999 82.75 205.375 37.875 160 0C114.375 38 81.999 82.875 81.999 112.75C81.999 159.375 114.125 192 160 192Z" })
  }
));
CandleHolderSolid.displayName = "CandleHolderSolid";
var CandleHolder_default = CandleHolderSolid;
