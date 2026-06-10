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
var TabletScreenButton_exports = {};
__export(TabletScreenButton_exports, {
  default: () => TabletScreenButton_default
});
module.exports = __toCommonJS(TabletScreenButton_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TabletScreenButtonThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 0H48C21.5 0 0 21.5 0 48V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V48C448 21.5 426.5 0 400 0ZM432 464C432 481.645 417.645 496 400 496H48C30.355 496 16 481.645 16 464V368H432V464ZM432 352H16V48C16 30.355 30.355 16 48 16H400C417.645 16 432 30.355 432 48V352ZM224 464C241.674 464 256 449.672 256 432S241.674 400 224 400C206.328 400 192 414.328 192 432S206.328 464 224 464ZM224 416C232.822 416 240 423.176 240 432S232.822 448 224 448S208 440.824 208 432S215.178 416 224 416Z" })
  }
));
TabletScreenButtonThin.displayName = "TabletScreenButtonThin";
var TabletScreenButton_default = TabletScreenButtonThin;
