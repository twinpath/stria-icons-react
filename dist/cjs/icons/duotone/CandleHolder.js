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
const CandleHolderDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 192C205.875 192 238 159.375 238 112.75C238 82.75 205.375 37.875 160 0C114.375 38 82 82.875 82 112.75C82 159.375 114.125 192 160 192ZM376 368C336.25 368 304 400.25 304 440C304 448.5 305.75 456.5 308.375 464H16C7.125 464 0 471.125 0 480V496C0 504.875 7.125 512 16 512H376C415.75 512 448 479.75 448 440S415.75 368 376 368ZM376 464C362.75 464 352 453.25 352 440S362.75 416 376 416S400 426.75 400 440S389.25 464 376 464Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 256V464H64V256C64 238.375 78.375 224 96 224H128V272C128 280.875 135.125 288 144 288S160 280.875 160 272V224H224C241.625 224 256 238.375 256 256Z" })
    ]
  }
));
CandleHolderDuotone.displayName = "CandleHolderDuotone";
var CandleHolder_default = CandleHolderDuotone;
