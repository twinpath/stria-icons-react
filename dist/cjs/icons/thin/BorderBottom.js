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
var BorderBottom_exports = {};
__export(BorderBottom_exports, {
  default: () => BorderBottom_default
});
module.exports = __toCommonJS(BorderBottom_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BorderBottomThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 368C424.822 368 432 360.82 432 352S424.822 336 416 336S400 343.18 400 352S407.178 368 416 368ZM320 80C328.822 80 336 72.82 336 64S328.822 48 320 48S304 55.18 304 64S311.178 80 320 80ZM224 176C232.822 176 240 168.82 240 160S232.822 144 224 144S208 151.18 208 160S215.178 176 224 176ZM320 272C328.822 272 336 264.82 336 256S328.822 240 320 240S304 247.18 304 256S311.178 272 320 272ZM224 80C232.822 80 240 72.82 240 64S232.822 48 224 48S208 55.18 208 64S215.178 80 224 80ZM416 272C424.822 272 432 264.82 432 256S424.822 240 416 240S400 247.18 400 256S407.178 272 416 272ZM416 80C424.822 80 432 72.82 432 64S424.822 48 416 48S400 55.18 400 64S407.178 80 416 80ZM416 176C424.822 176 432 168.82 432 160S424.822 144 416 144S400 151.18 400 160S407.178 176 416 176ZM32 272C40.822 272 48 264.82 48 256S40.822 240 32 240S16 247.18 16 256S23.178 272 32 272ZM32 368C40.822 368 48 360.82 48 352S40.822 336 32 336S16 343.18 16 352S23.178 368 32 368ZM32 176C40.822 176 48 168.82 48 160S40.822 144 32 144S16 151.18 16 160S23.178 176 32 176ZM440 464H8C3.594 464 0 467.578 0 472S3.594 480 8 480H440C444.406 480 448 476.422 448 472S444.406 464 440 464ZM224 272C232.822 272 240 264.82 240 256S232.822 240 224 240S208 247.18 208 256S215.178 272 224 272ZM32 80C40.822 80 48 72.82 48 64S40.822 48 32 48S16 55.18 16 64S23.178 80 32 80ZM128 272C136.822 272 144 264.82 144 256S136.822 240 128 240S112 247.18 112 256S119.178 272 128 272ZM224 368C232.822 368 240 360.82 240 352S232.822 336 224 336S208 343.18 208 352S215.178 368 224 368ZM128 80C136.822 80 144 72.82 144 64S136.822 48 128 48S112 55.18 112 64S119.178 80 128 80Z" })
  }
));
BorderBottomThin.displayName = "BorderBottomThin";
var BorderBottom_default = BorderBottomThin;
