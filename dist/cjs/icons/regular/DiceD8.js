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
var DiceD8_exports = {};
__export(DiceD8_exports, {
  default: () => DiceD8_default
});
module.exports = __toCommonJS(DiceD8_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceD8Regular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 256C512 247.375 508.718 238.75 502.155 232.125L279.878 9.875C273.252 3.25 264.626 0 256 0S238.748 3.25 232.122 9.875L9.845 232.125C3.282 238.75 0 247.406 0 256.047C0 264.688 3.282 273.312 9.845 279.875L232.122 502.125C238.748 508.75 247.374 512 256 512S273.252 508.75 279.878 502.125L502.155 279.875C508.718 273.25 512 264.625 512 256ZM280.003 77.875L446.398 244.25L280.003 315.625V77.875ZM231.997 315.625L65.602 244.25L231.997 77.875V315.625ZM231.997 367.875V434.125L115.983 318.125L231.997 367.875ZM280.003 367.875L396.017 318.125L280.003 434.125V367.875Z " })
  }
));
DiceD8Regular.displayName = "DiceD8Regular";
var DiceD8_default = DiceD8Regular;
