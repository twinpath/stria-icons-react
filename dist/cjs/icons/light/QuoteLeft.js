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
var QuoteLeft_exports = {};
__export(QuoteLeft_exports, {
  default: () => QuoteLeft_default
});
module.exports = __toCommonJS(QuoteLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const QuoteLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 480H160C195.346 480 224 451.346 224 416V320C224 284.654 195.346 256 160 256H64C52.283 256 41.445 259.379 32 264.877V208C32 128.594 96.594 64 176 64C184.844 64 192 56.844 192 48S184.844 32 176 32C78.953 32 0 110.953 0 208V416C0 451.346 28.654 480 64 480ZM32 320C32 302.355 46.355 288 64 288H160C177.645 288 192 302.355 192 320V416C192 433.645 177.645 448 160 448H64C46.355 448 32 433.645 32 416V320ZM352 480H448C483.346 480 512 451.346 512 416V320C512 284.654 483.346 256 448 256H352C340.283 256 329.445 259.379 320 264.877V208C320 128.594 384.594 64 464 64C472.844 64 480 56.844 480 48S472.844 32 464 32C366.953 32 288 110.953 288 208V416C288 451.346 316.654 480 352 480ZM320 320C320 302.355 334.355 288 352 288H448C465.645 288 480 302.355 480 320V416C480 433.645 465.645 448 448 448H352C334.355 448 320 433.645 320 416V320Z" })
  }
));
QuoteLeftLight.displayName = "QuoteLeftLight";
var QuoteLeft_default = QuoteLeftLight;
