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
const CandleHolderLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 192C205.875 192 238 159.375 238 112.75C238 82.75 205.375 37.875 160 0C114.375 38 82 82.875 82 112.75C82 159.375 114.125 192 160 192ZM160 43.125C191.5 74 206 101.375 206 112.75C206 141.875 188.375 160 160 160S114 141.875 114 112.75C114 101.375 128.5 74 160 43.125ZM371.035 385.27C347.098 389.951 327.34 409.469 321.754 433.209C317.609 450.814 321.143 466.643 328.875 480H256V272C256 245.6 234.4 224 208 224H112C85.6 224 64 245.6 64 272V480H16C7.199 480 0 487.199 0 496C0 504.799 7.143 512 15.941 512H380.484C412.666 512 442.449 489.811 447.246 457.986C453.902 413.809 415.504 376.574 371.035 385.27ZM224 480H96V272C96 263.162 103.164 256 112 256H128V304C128 312.875 135.125 320 144 320S160 312.875 160 304V256H208C216.836 256 224 263.162 224 272V480ZM384 480C366.375 480 352 465.625 352 448S366.375 416 384 416S416 430.375 416 448S401.625 480 384 480Z" })
  }
));
CandleHolderLight.displayName = "CandleHolderLight";
var CandleHolder_default = CandleHolderLight;
