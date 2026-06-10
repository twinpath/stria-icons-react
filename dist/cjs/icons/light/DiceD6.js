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
var DiceD6_exports = {};
__export(DiceD6_exports, {
  default: () => DiceD6_default
});
module.exports = __toCommonJS(DiceD6_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceD6Light = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M431.875 116.108L239.875 4.219C235 1.406 229.5 0 224 0S213 1.406 208.125 4.219L16.125 116.108C6.125 121.984 0 132.735 0 144.486V367.514C0 379.265 6.125 390.016 16.125 395.892L208.125 507.781C213 510.594 218.5 512 224 512S235 510.594 239.875 507.781L431.875 395.892C441.875 390.016 448 379.265 448 367.514V144.486C448 132.735 441.875 121.984 431.875 116.108ZM224 32.098L399.75 134.985L224 237.498L47.875 134.735L224 32.098ZM32.25 162.614L208 265.126V470.526L32 367.514L32.25 162.614ZM240 470.901V265.126L416 162.489L415.75 368.264L240 470.901Z " })
  }
));
DiceD6Light.displayName = "DiceD6Light";
var DiceD6_default = DiceD6Light;
