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
var LariSign_exports = {};
__export(LariSign_exports, {
  default: () => LariSign_default
});
module.exports = __toCommonJS(LariSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LariSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 464C384 472.844 376.844 480 368 480H16C7.156 480 0 472.844 0 464S7.156 448 16 448H86.094C34.268 413.584 0 354.746 0 288C0 204.592 53.549 133.643 128 107.201V48C128 39.156 135.156 32 144 32S160 39.156 160 48V98.891C170.432 97.129 181.076 96 192 96S213.568 97.129 224 98.891V48C224 39.156 231.156 32 240 32S256 39.156 256 48V107.201C330.451 133.643 384 204.592 384 288C384 296.844 376.844 304 368 304S352 296.844 352 288C352 222.559 312.406 166.322 256 141.562V272C256 280.844 248.844 288 240 288S224 280.844 224 272V131.234C213.656 129.125 202.957 128 192 128S170.344 129.125 160 131.234V272C160 280.844 152.844 288 144 288S128 280.844 128 272V141.562C71.594 166.322 32 222.559 32 288C32 376.219 103.781 448 192 448H368C376.844 448 384 455.156 384 464Z" })
  }
));
LariSignLight.displayName = "LariSignLight";
var LariSign_default = LariSignLight;
