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
var EllipsisStroke_exports = {};
__export(EllipsisStroke_exports, {
  default: () => EllipsisStroke_default
});
module.exports = __toCommonJS(EllipsisStroke_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EllipsisStrokeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 256C160 211.834 124.166 176 80 176S0 211.834 0 256S35.834 336 80 336S160 300.166 160 256ZM64 256C64 247.178 71.178 240 80 240S96 247.178 96 256S88.822 272 80 272S64 264.822 64 256ZM176 256C176 300.166 211.834 336 256 336S336 300.166 336 256S300.166 176 256 176S176 211.834 176 256ZM272 256C272 264.822 264.822 272 256 272S240 264.822 240 256S247.178 240 256 240S272 247.178 272 256ZM352 256C352 300.166 387.834 336 432 336S512 300.166 512 256S476.166 176 432 176S352 211.834 352 256ZM448 256C448 264.822 440.822 272 432 272S416 264.822 416 256S423.178 240 432 240S448 247.178 448 256Z" })
  }
));
EllipsisStrokeSolid.displayName = "EllipsisStrokeSolid";
var EllipsisStroke_default = EllipsisStrokeSolid;
