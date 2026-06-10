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
var Print_exports = {};
__export(Print_exports, {
  default: () => Print_default
});
module.exports = __toCommonJS(Print_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PrintLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 320H96C78.326 320 64 334.326 64 352V480C64 497.672 78.326 512 96 512H416C433.674 512 448 497.672 448 480V352C448 334.326 433.674 320 416 320ZM416 480H96V352H416V480ZM448 192V70.633C448 62.144 444.628 54.003 438.625 48L399.994 9.369C393.995 3.37 385.859 0 377.375 0H128C92.654 0 64 28.654 64 64V192C28.703 192 0 220.703 0 256V368C0 376.844 7.156 384 16 384S32 376.844 32 368V256C32 238.327 46.327 224 64 224H448C465.673 224 480 238.327 480 256V368C480 376.844 487.156 384 496 384S512 376.844 512 368V256C512 220.703 483.297 192 448 192ZM416 192H96V64C96 46.327 110.327 32 128 32H377.375L416 70.625V192ZM432 248C418.746 248 408 258.744 408 272C408 285.254 418.746 296 432 296S456 285.254 456 272C456 258.744 445.254 248 432 248Z" })
  }
));
PrintLight.displayName = "PrintLight";
var Print_default = PrintLight;
