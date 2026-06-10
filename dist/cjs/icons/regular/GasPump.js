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
var GasPump_exports = {};
__export(GasPump_exports, {
  default: () => GasPump_default
});
module.exports = __toCommonJS(GasPump_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GasPumpRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.173 107.173L417.898 32.039C408.542 22.683 393.378 22.665 384 32L384 32C374.591 41.365 374.574 56.59 383.961 65.977L416 97.875V160C416 188.125 436.875 211.25 464 215.25V376C464 389.25 453.25 400 440 400C426.75 400 416 389.25 416 376V344C416 295.399 376.601 256 328 256H320V64C320 28.654 291.346 0 256 0H96C60.654 0 32 28.654 32 64V464H24C10.8 464 0 474.8 0 488V488C0 501.2 10.8 512 24 512H328C341.2 512 352 501.2 352 488V488C352 474.8 341.2 464 328 464H320V304H328C350.091 304 368 321.909 368 344V371.75C368 409.5 395 443.75 432.5 447.75C475.5 452 512 418.25 512 376V152.625C512 135.577 505.228 119.228 493.173 107.173ZM272 464H80V240H272V464ZM272 192H80V64C80 55.163 87.163 48 96 48H256C264.837 48 272 55.163 272 64V192Z" })
  }
));
GasPumpRegular.displayName = "GasPumpRegular";
var GasPump_default = GasPumpRegular;
