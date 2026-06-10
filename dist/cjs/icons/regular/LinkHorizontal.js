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
var LinkHorizontal_exports = {};
__export(LinkHorizontal_exports, {
  default: () => LinkHorizontal_default
});
module.exports = __toCommonJS(LinkHorizontal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LinkHorizontalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 304C91.062 304 48 260.938 48 208S91.062 112 144 112H304C356.938 112 400 155.062 400 208S356.938 304 304 304H272C272 323.234 280.645 340.326 294.143 352H304C383.406 352 448 287.406 448 208S383.406 64 304 64H144C64.594 64 0 128.594 0 208S64.594 352 144 352H167.451C163.061 336.648 160 320.746 160 304H144ZM496 160H472.549C476.939 175.352 480 191.254 480 208H496C548.938 208 592 251.062 592 304S548.938 400 496 400H336C283.062 400 240 356.938 240 304S283.062 208 336 208H368C368 188.766 359.355 171.674 345.857 160H336C256.594 160 192 224.594 192 304S256.594 448 336 448H496C575.406 448 640 383.406 640 304S575.406 160 496 160Z" })
  }
));
LinkHorizontalRegular.displayName = "LinkHorizontalRegular";
var LinkHorizontal_default = LinkHorizontalRegular;
