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
const QuoteRightRoundRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 32C338.145 32 288 82.145 288 144S338.145 256 400 256C423.84 256 445.84 248.43 464 235.732V328C464 385.344 417.344 432 360 432H344C330.75 432 320 442.75 320 456S330.75 480 344 480H360C443.812 480 512 411.812 512 328V144C512 82.145 461.855 32 400 32ZM400 208C364.711 208 336 179.289 336 144S364.711 80 400 80S464 108.711 464 144S435.289 208 400 208ZM112 32C50.145 32 0 82.145 0 144S50.145 256 112 256C135.84 256 157.84 248.43 176 235.732V328C176 385.344 129.344 432 72 432H56C42.75 432 32 442.75 32 456S42.75 480 56 480H72C155.812 480 224 411.812 224 328V144C224 82.145 173.855 32 112 32ZM112 208C76.711 208 48 179.289 48 144S76.711 80 112 80S176 108.711 176 144S147.289 208 112 208Z" })
  }
));
QuoteRightRoundRegular.displayName = "QuoteRightRoundRegular";
var QuoteRightRound_default = QuoteRightRoundRegular;
