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
var BracketCurly_exports = {};
__export(BracketCurly_exports, {
  default: () => BracketCurly_default
});
module.exports = __toCommonJS(BracketCurly_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BracketCurlyLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 152.453V112C96 85.533 117.533 64 144 64H208C216.822 64 224 56.822 224 48S216.822 32 208 32H144C99.889 32 64 67.889 64 112V152.453C64 190.484 42.865 224.678 8.844 241.688C3.383 244.436 0 249.916 0 256S3.383 267.564 8.828 270.303C42.865 287.322 64 321.516 64 359.547V400C64 444.111 99.889 480 144 480H208C216.822 480 224 472.822 224 464S216.822 448 208 448H144C117.533 448 96 426.467 96 400V359.547C96 318.709 77.426 280.791 45.795 256C77.426 231.209 96 193.291 96 152.453Z" })
  }
));
BracketCurlyLight.displayName = "BracketCurlyLight";
var BracketCurly_default = BracketCurlyLight;
