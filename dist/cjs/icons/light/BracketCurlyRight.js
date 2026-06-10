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
var BracketCurlyRight_exports = {};
__export(BracketCurlyRight_exports, {
  default: () => BracketCurlyRight_default
});
module.exports = __toCommonJS(BracketCurlyRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BracketCurlyRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M210.205 256C178.574 280.791 160 318.709 160 359.547V400C160 426.467 138.467 448 112 448H48C39.178 448 32 455.178 32 464S39.178 480 48 480H112C156.111 480 192 444.111 192 400V359.547C192 321.516 213.135 287.322 247.172 270.303C252.617 267.564 256 262.084 256 256S252.617 244.436 247.156 241.688C213.135 224.678 192 190.484 192 152.453V112C192 67.889 156.111 32 112 32H48C39.178 32 32 39.178 32 48S39.178 64 48 64H112C138.467 64 160 85.533 160 112V152.453C160 193.291 178.574 231.209 210.205 256Z" })
  }
));
BracketCurlyRightLight.displayName = "BracketCurlyRightLight";
var BracketCurlyRight_default = BracketCurlyRightLight;
