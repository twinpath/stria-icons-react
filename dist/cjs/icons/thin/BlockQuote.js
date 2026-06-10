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
const BlockQuoteThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 96C512 91.594 508.406 88 504 88H8C3.594 88 0 91.594 0 96S3.594 104 8 104H504C508.406 104 512 100.406 512 96ZM504 248H136C131.594 248 128 251.594 128 256S131.594 264 136 264H504C508.406 264 512 260.406 512 256S508.406 248 504 248ZM504 408H136C131.594 408 128 411.594 128 416S131.594 424 136 424H504C508.406 424 512 420.406 512 416S508.406 408 504 408ZM24 224C19.594 224 16 227.594 16 232V440C16 444.406 19.594 448 24 448S32 444.406 32 440V232C32 227.594 28.406 224 24 224Z" })
  }
));
BlockQuoteThin.displayName = "BlockQuoteThin";
var BlockQuote_default = BlockQuoteThin;
