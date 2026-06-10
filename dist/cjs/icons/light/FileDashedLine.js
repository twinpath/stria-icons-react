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
var FileDashedLine_exports = {};
__export(FileDashedLine_exports, {
  default: () => FileDashedLine_default
});
module.exports = __toCommonJS(FileDashedLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileDashedLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 288C160 279.156 152.844 272 144 272H16C7.156 272 0 279.156 0 288S7.156 304 16 304H144C152.844 304 160 296.844 160 288ZM240 272C231.156 272 224 279.156 224 288S231.156 304 240 304H336C344.844 304 352 296.844 352 288S344.844 272 336 272H240ZM560 272H432C423.156 272 416 279.156 416 288S423.156 304 432 304H560C568.844 304 576 296.844 576 288S568.844 272 560 272ZM464 352C455.164 352 448 359.164 448 368V448C448 465.672 433.674 480 416 480H160C142.326 480 128 465.672 128 448V368C128 359.164 120.836 352 112 352S96 359.164 96 368V448C96 483.344 124.654 512 160 512H416C451.346 512 480 483.344 480 448V368C480 359.164 472.836 352 464 352ZM112 224C120.836 224 128 216.836 128 208V64C128 46.328 142.326 32 160 32H288V144C288 170.508 309.49 192 336 192H448V208C448 216.836 455.164 224 464 224S480 216.836 480 208V170.508C480 153.531 473.258 137.254 461.254 125.25L354.746 18.746C342.742 6.742 326.463 0 309.488 0H160C124.654 0 96 28.652 96 64V208C96 216.836 103.164 224 112 224ZM320 34.078C324.477 35.641 328.666 37.922 332.119 41.375L438.627 147.879C442.08 151.332 444.357 155.523 445.924 160H336C327.188 160 320 152.828 320 144V34.078Z" })
  }
));
FileDashedLineLight.displayName = "FileDashedLineLight";
var FileDashedLine_default = FileDashedLineLight;
