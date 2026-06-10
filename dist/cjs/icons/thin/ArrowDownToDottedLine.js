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
var ArrowDownToDottedLine_exports = {};
__export(ArrowDownToDottedLine_exports, {
  default: () => ArrowDownToDottedLine_default
});
module.exports = __toCommonJS(ArrowDownToDottedLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownToDottedLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 432C119.164 432 112 439.164 112 448S119.164 464 128 464S144 456.836 144 448S136.836 432 128 432ZM224 432C215.164 432 208 439.164 208 448S215.164 464 224 464S240 456.836 240 448S232.836 432 224 432ZM32 432C23.164 432 16 439.164 16 448S23.164 464 32 464S48 456.836 48 448S40.836 432 32 432ZM320 432C311.164 432 304 439.164 304 448S311.164 464 320 464S336 456.836 336 448S328.836 432 320 432ZM416 432C407.164 432 400 439.164 400 448S407.164 464 416 464S432 456.836 432 448S424.836 432 416 432ZM218.344 365.655C221.469 368.78 226.531 368.78 229.656 365.655L381.656 213.655C383.219 212.093 384 210.062 384 207.999S383.219 203.905 381.656 202.343C378.531 199.218 373.469 199.218 370.344 202.343L232 340.687V55.999C232 51.593 228.422 47.999 224 47.999S216 51.593 216 55.999V340.687L77.656 202.343C74.531 199.218 69.469 199.218 66.344 202.343S63.219 210.53 66.344 213.655L218.344 365.655Z" })
  }
));
ArrowDownToDottedLineThin.displayName = "ArrowDownToDottedLineThin";
var ArrowDownToDottedLine_default = ArrowDownToDottedLineThin;
