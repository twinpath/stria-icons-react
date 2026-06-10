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
var Coins_exports = {};
__export(Coins_exports, {
  default: () => Coins_default
});
module.exports = __toCommonJS(Coins_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CoinsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 160C85.961 160 0 195.816 0 240V432C0 476.182 85.961 512 192 512S384 476.182 384 432V240C384 195.816 298.039 160 192 160ZM352 432C352 444.336 296.986 480 192 480S32 444.336 32 432V380.186C66.389 401.76 125.18 416 192 416S317.611 401.76 352 380.186V432ZM352 336C352 348.336 296.986 384 192 384S32 348.336 32 336V284.186C66.389 305.76 125.18 320 192 320S317.611 305.76 352 284.186V336ZM192 288C87.014 288 32 252.336 32 240S87.014 192 192 192S352 227.664 352 240S296.986 288 192 288ZM320 0C224 0 128 26.363 128 79.09V111.219C128 120.1 135.156 127.285 144 127.285S160 120.1 160 111.219V79.09C160 59.904 223.812 30.896 320 30.896S480 59.904 480 79.09C480 93.398 440.5 117.307 366.375 124.947C358.123 125.8 352.008 132.773 352.008 140.909C352.008 154.742 365.205 156.998 367.969 156.998C373.237 156.998 439.046 150.505 480 125.197V159.414C480 168.23 463.531 182.693 427.406 193.598C420.48 195.689 415.999 202.063 415.999 208.967C415.999 210.504 416.221 212.067 416.688 213.615C418.75 220.564 425.125 225.053 432 225.053C437.233 225.053 462.283 216.592 480 205.576V239.736C480 248.553 463.531 263.018 427.406 273.92C420.48 276.011 415.999 282.385 415.999 289.289C415.999 290.826 416.221 292.389 416.688 293.937C418.75 300.889 425.125 305.375 432 305.375C433.882 305.375 512 286.798 512 239.736V79.09C512 26.363 416 0 320 0Z " })
  }
));
CoinsLight.displayName = "CoinsLight";
var Coins_default = CoinsLight;
