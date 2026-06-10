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
const QuoteLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 256H352C346.441 256 341.143 256.932 336 258.264V184C336 126.656 382.656 80 440 80H456C469.25 80 480 69.25 480 56S469.25 32 456 32H440C356.188 32 288 100.188 288 184V416C288 451.346 316.654 480 352 480H448C483.346 480 512 451.346 512 416V320C512 284.654 483.346 256 448 256ZM464 416C464 424.822 456.822 432 448 432H352C343.178 432 336 424.822 336 416V320C336 311.178 343.178 304 352 304H448C456.822 304 464 311.178 464 320V416ZM160 256H64C58.441 256 53.143 256.932 48 258.264V184C48 126.656 94.656 80 152 80H168C181.25 80 192 69.25 192 56S181.25 32 168 32H152C68.188 32 0 100.188 0 184V416C0 451.346 28.654 480 64 480H160C195.346 480 224 451.346 224 416V320C224 284.654 195.346 256 160 256ZM176 416C176 424.822 168.822 432 160 432H64C55.178 432 48 424.822 48 416V320C48 311.178 55.178 304 64 304H160C168.822 304 176 311.178 176 320V416Z" })
  }
));
QuoteLeftRegular.displayName = "QuoteLeftRegular";
var QuoteLeft_default = QuoteLeftRegular;
