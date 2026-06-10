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
var DesktopArrowDown_exports = {};
__export(DesktopArrowDown_exports, {
  default: () => DesktopArrowDown_default
});
module.exports = __toCommonJS(DesktopArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DesktopArrowDownRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.031 103.031C181.656 112.406 181.656 127.594 191.031 136.969L271.031 216.969C280.406 226.344 295.594 226.344 304.969 216.969L384.969 136.969C394.344 127.594 394.344 112.406 384.969 103.031S360.406 93.656 351.031 103.031L312 142.062V24C312 10.75 301.25 0 288 0S264 10.75 264 24V142.062L224.969 103.031C220.281 98.344 214.156 96 208 96S195.719 98.344 191.031 103.031ZM512 0H352V48H512C520.822 48 528 55.178 528 64V256H48V64C48 55.178 55.178 48 64 48H224V0H64C28.654 0 0 28.654 0 64V352C0 387.346 28.654 416 64 416H212.328L202.729 464H152C138.75 464 128 474.75 128 488S138.75 512 152 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464H373.271L363.672 416H512C547.346 416 576 387.346 576 352V64C576 28.654 547.346 0 512 0ZM251.672 464L261.271 416H314.729L324.328 464H251.672ZM528 352C528 360.822 520.822 368 512 368H64C55.178 368 48 360.822 48 352V304H528V352Z" })
  }
));
DesktopArrowDownRegular.displayName = "DesktopArrowDownRegular";
var DesktopArrowDown_default = DesktopArrowDownRegular;
