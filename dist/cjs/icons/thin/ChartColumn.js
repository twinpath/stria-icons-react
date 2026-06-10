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
var ChartColumn_exports = {};
__export(ChartColumn_exports, {
  default: () => ChartColumn_default
});
module.exports = __toCommonJS(ChartColumn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartColumnThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M399.986 384H431.986C440.822 384 447.986 376.836 447.986 368V112C447.986 103.162 440.822 96 431.986 96H399.986C391.15 96 383.986 103.162 383.986 112V368C383.986 376.836 391.15 384 399.986 384ZM399.986 112H431.986V368H399.986V112ZM207.986 384H239.986C248.822 384 255.986 376.836 255.986 368V144C255.986 135.162 248.822 128 239.986 128H207.986C199.15 128 191.986 135.162 191.986 144V368C191.986 376.836 199.15 384 207.986 384ZM207.986 144H239.986V368H207.986V144ZM111.986 384H143.986C152.822 384 159.986 376.836 159.986 368V272C159.986 263.162 152.822 256 143.986 256H111.986C103.15 256 95.986 263.162 95.986 272V368C95.986 376.836 103.15 384 111.986 384ZM111.986 272H143.986V368H111.986V272ZM303.986 384H335.986C344.822 384 351.986 376.836 351.986 368V208C351.986 199.162 344.822 192 335.986 192H303.986C295.15 192 287.986 199.162 287.986 208V368C287.986 376.836 295.15 384 303.986 384ZM303.986 208H335.986V368H303.986V208ZM504 464H72C41.125 464 16 438.875 16 408V40C16 35.594 12.406 32 8 32S0 35.594 0 40V408C0 447.688 32.312 480 72 480H504C508.406 480 512 476.406 512 472S508.406 464 504 464Z" })
  }
));
ChartColumnThin.displayName = "ChartColumnThin";
var ChartColumn_default = ChartColumnThin;
