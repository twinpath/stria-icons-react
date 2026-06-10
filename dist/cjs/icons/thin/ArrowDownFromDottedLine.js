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
var ArrowDownFromDottedLine_exports = {};
__export(ArrowDownFromDottedLine_exports, {
  default: () => ArrowDownFromDottedLine_default
});
module.exports = __toCommonJS(ArrowDownFromDottedLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownFromDottedLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 79.999C328.836 79.999 336 72.835 336 63.999S328.836 47.999 320 47.999S304 55.163 304 63.999S311.164 79.999 320 79.999ZM224 79.999C232.836 79.999 240 72.835 240 63.999S232.836 47.999 224 47.999S208 55.163 208 63.999S215.164 79.999 224 79.999ZM416 79.999C424.836 79.999 432 72.835 432 63.999S424.836 47.999 416 47.999S400 55.163 400 63.999S407.164 79.999 416 79.999ZM128 79.999C136.836 79.999 144 72.835 144 63.999S136.836 47.999 128 47.999S112 55.163 112 63.999S119.164 79.999 128 79.999ZM32 79.999C40.836 79.999 48 72.835 48 63.999S40.836 47.999 32 47.999S16 55.163 16 63.999S23.164 79.999 32 79.999ZM218.344 477.655C221.469 480.78 226.531 480.78 229.656 477.655L381.656 325.655C383.219 324.093 384 322.062 384 319.999S383.219 315.905 381.656 314.343C378.531 311.218 373.469 311.218 370.344 314.343L232 452.687V167.999C232 163.593 228.422 159.999 224 159.999S216 163.593 216 167.999V452.687L77.656 314.343C74.531 311.218 69.469 311.218 66.344 314.343S63.219 322.53 66.344 325.655L218.344 477.655Z" })
  }
));
ArrowDownFromDottedLineThin.displayName = "ArrowDownFromDottedLineThin";
var ArrowDownFromDottedLine_default = ArrowDownFromDottedLineThin;
