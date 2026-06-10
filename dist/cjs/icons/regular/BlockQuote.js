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
const BlockQuoteRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 120C501.254 120 512 109.254 512 96S501.254 72 488 72H24C10.746 72 0 82.746 0 96S10.746 120 24 120H488ZM24 224C10.746 224 0 234.746 0 248V424C0 437.254 10.746 448 24 448S48 437.254 48 424V248C48 234.746 37.254 224 24 224ZM488 232H152C138.746 232 128 242.746 128 256S138.746 280 152 280H488C501.254 280 512 269.254 512 256S501.254 232 488 232ZM488 392H152C138.746 392 128 402.746 128 416S138.746 440 152 440H488C501.254 440 512 429.254 512 416S501.254 392 488 392Z" })
  }
));
BlockQuoteRegular.displayName = "BlockQuoteRegular";
var BlockQuote_default = BlockQuoteRegular;
