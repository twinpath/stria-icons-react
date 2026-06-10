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
var BlockQuote_exports = {};
__export(BlockQuote_exports, {
  default: () => BlockQuote_default
});
module.exports = __toCommonJS(BlockQuote_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlockQuoteLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 96C512 87.199 504.801 80 496 80H16C7.201 80 0 87.199 0 96C0 104.799 7.201 112 16 112H496C504.801 112 512 104.799 512 96ZM16 224C7.201 224 0 231.201 0 240V432C0 440.801 7.201 448 16 448C24.801 448 32 440.801 32 432V240C32 231.201 24.801 224 16 224ZM496 400H144C135.201 400 128 407.199 128 416C128 424.799 135.201 432 144 432H496C504.801 432 512 424.799 512 416C512 407.199 504.801 400 496 400ZM496 240H144C135.201 240 128 247.199 128 256C128 264.799 135.201 272 144 272H496C504.801 272 512 264.799 512 256C512 247.199 504.801 240 496 240Z" })
  }
));
BlockQuoteLight.displayName = "BlockQuoteLight";
var BlockQuote_default = BlockQuoteLight;
