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
var QuoteRight_exports = {};
__export(QuoteRight_exports, {
  default: () => QuoteRight_default
});
module.exports = __toCommonJS(QuoteRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const QuoteRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 272H464C476.35 272 487.494 267.205 496 259.543V320H495.986V360C495.986 408.531 456.518 448 407.986 448H359.986C355.58 448 351.986 451.578 351.986 456S355.58 464 359.986 464H407.986C465.33 464 511.986 417.344 511.986 360L511.994 224.051C511.994 224.033 512 224.018 512 224V96C512 69.49 490.51 48 464 48H336C309.49 48 288 69.49 288 96V224C288 250.51 309.49 272 336 272ZM304 96C304 78.355 318.355 64 336 64H464C481.645 64 496 78.355 496 96V224C496 241.645 481.645 256 464 256H336C318.355 256 304 241.645 304 224V96ZM48 272H176C188.35 272 199.494 267.205 208 259.543V320H207.986V360C207.986 408.531 168.518 448 119.986 448H71.986C67.58 448 63.986 451.578 63.986 456S67.58 464 71.986 464H119.986C177.33 464 223.986 417.344 223.986 360L223.994 224.051C223.994 224.033 224 224.018 224 224V96C224 69.49 202.51 48 176 48H48C21.49 48 0 69.49 0 96V224C0 250.51 21.49 272 48 272ZM16 96C16 78.355 30.355 64 48 64H176C193.645 64 208 78.355 208 96V224C208 241.645 193.645 256 176 256H48C30.355 256 16 241.645 16 224V96Z" })
  }
));
QuoteRightThin.displayName = "QuoteRightThin";
var QuoteRight_default = QuoteRightThin;
