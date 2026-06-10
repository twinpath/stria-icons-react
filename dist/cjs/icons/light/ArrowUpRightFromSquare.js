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
var ArrowUpRightFromSquare_exports = {};
__export(ArrowUpRightFromSquare_exports, {
  default: () => ArrowUpRightFromSquare_default
});
module.exports = __toCommonJS(ArrowUpRightFromSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpRightFromSquareLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 288C391.164 288 384 295.164 384 304V448C384 465.674 369.674 480 352 480H64C46.328 480 32 465.674 32 448V160C32 142.326 46.328 128 64 128H176C184.838 128 192 120.836 192 112S184.838 96 176 96H64C28.654 96 0 124.654 0 160V448C0 483.346 28.654 512 64 512H352C387.348 512 416 483.346 416 448V304C416 295.164 408.838 288 400 288ZM496 0H336C327.156 0 320 7.156 320 16S327.156 32 336 32H457.375L180.688 308.688C174.438 314.938 174.438 325.063 180.688 331.312C183.812 334.438 187.906 336 192 336S200.188 334.438 203.312 331.312L480 54.625V176C480 184.844 487.156 192 496 192S512 184.844 512 176V16C512 7.156 504.844 0 496 0Z" })
  }
));
ArrowUpRightFromSquareLight.displayName = "ArrowUpRightFromSquareLight";
var ArrowUpRightFromSquare_default = ArrowUpRightFromSquareLight;
