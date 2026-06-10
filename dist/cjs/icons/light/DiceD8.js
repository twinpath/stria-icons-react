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
const DiceD8Light = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 256.047C512 247.404 508.718 238.746 502.155 232.182L279.878 9.877C273.252 3.251 264.626 0 256 0S238.748 3.251 232.122 9.877L9.845 232.182C3.282 238.746 0 247.373 0 256C0 264.627 3.282 273.254 9.845 279.818L232.122 502.123C238.748 508.749 247.249 512 256 512S273.252 508.749 279.878 502.123L502.155 279.818C508.718 273.317 512 264.69 512 256.047ZM239.998 464.864L61.226 285.945L239.998 362.589V464.864ZM239.998 327.83L43.724 243.684L239.998 47.262V327.83ZM272.002 464.864V362.589L450.774 285.945L272.002 464.864ZM272.002 327.83V47.262L468.276 243.684L272.002 327.83Z " })
  }
));
DiceD8Light.displayName = "DiceD8Light";
var DiceD8_default = DiceD8Light;
