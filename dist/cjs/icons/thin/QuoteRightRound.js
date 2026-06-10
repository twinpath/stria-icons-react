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
var QuoteRightRound_exports = {};
__export(QuoteRightRound_exports, {
  default: () => QuoteRightRound_default
});
module.exports = __toCommonJS(QuoteRightRound_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const QuoteRightRoundThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 272H128C161.422 272 190.793 254.879 207.986 228.973V360C207.986 408.531 168.518 448 119.986 448H71.986C67.58 448 63.986 451.578 63.986 456S67.58 464 71.986 464H119.986C177.33 464 223.986 417.344 223.986 360L224 144C224 90.98 181.02 48 128 48H96C42.98 48 0 90.98 0 144V176C0 229.02 42.98 272 96 272ZM16 144C16 99.889 51.889 64 96 64H128C172.111 64 208 99.889 208 144L207.986 176.135C207.912 220.18 172.064 256 128 256H96C51.889 256 16 220.111 16 176V144ZM384 272H416C449.422 272 478.793 254.879 495.986 228.973V360C495.986 408.531 456.518 448 407.986 448H359.986C355.58 448 351.986 451.578 351.986 456S355.58 464 359.986 464H407.986C465.33 464 511.986 417.344 511.986 360L512 144C512 90.98 469.02 48 416 48H384C330.98 48 288 90.98 288 144V176C288 229.02 330.98 272 384 272ZM304 144C304 99.889 339.889 64 384 64H416C460.111 64 496 99.889 496 144L495.986 176.135C495.912 220.18 460.064 256 416 256H384C339.889 256 304 220.111 304 176V144Z" })
  }
));
QuoteRightRoundThin.displayName = "QuoteRightRoundThin";
var QuoteRightRound_default = QuoteRightRoundThin;
