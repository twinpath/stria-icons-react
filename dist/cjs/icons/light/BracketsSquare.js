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
var BracketsSquare_exports = {};
__export(BracketsSquare_exports, {
  default: () => BracketsSquare_default
});
module.exports = __toCommonJS(BracketsSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BracketsSquareLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 32H304C295.178 32 288 39.178 288 48S295.178 64 304 64H400C408.822 64 416 71.178 416 80V432C416 440.822 408.822 448 400 448H304C295.178 448 288 455.178 288 464S295.178 480 304 480H400C426.467 480 448 458.467 448 432V80C448 53.533 426.467 32 400 32ZM48 64H144C152.822 64 160 56.822 160 48S152.822 32 144 32H48C21.533 32 0 53.533 0 80V432C0 458.467 21.533 480 48 480H144C152.822 480 160 472.822 160 464S152.822 448 144 448H48C39.178 448 32 440.822 32 432V80C32 71.178 39.178 64 48 64Z" })
  }
));
BracketsSquareLight.displayName = "BracketsSquareLight";
var BracketsSquare_default = BracketsSquareLight;
