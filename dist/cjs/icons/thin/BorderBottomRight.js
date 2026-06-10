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
var BorderBottomRight_exports = {};
__export(BorderBottomRight_exports, {
  default: () => BorderBottomRight_default
});
module.exports = __toCommonJS(BorderBottomRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BorderBottomRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 80C136.822 80 144 72.82 144 64S136.822 48 128 48S112 55.18 112 64S119.178 80 128 80ZM320 80C328.822 80 336 72.82 336 64S328.822 48 320 48S304 55.18 304 64S311.178 80 320 80ZM32 80C40.822 80 48 72.82 48 64S40.822 48 32 48S16 55.18 16 64S23.178 80 32 80ZM224 80C232.822 80 240 72.82 240 64S232.822 48 224 48S208 55.18 208 64S215.178 80 224 80ZM32 272C40.822 272 48 264.82 48 256S40.822 240 32 240S16 247.18 16 256S23.178 272 32 272ZM32 176C40.822 176 48 168.82 48 160S40.822 144 32 144S16 151.18 16 160S23.178 176 32 176ZM440 32C435.582 32 432 35.582 432 40V448C432 456.838 424.836 464 416 464H8C3.582 464 0 467.582 0 472S3.582 480 8 480H416C433.674 480 448 465.674 448 448V40C448 35.582 444.418 32 440 32ZM32 368C40.822 368 48 360.82 48 352S40.822 336 32 336S16 343.18 16 352S23.178 368 32 368Z" })
  }
));
BorderBottomRightThin.displayName = "BorderBottomRightThin";
var BorderBottomRight_default = BorderBottomRightThin;
