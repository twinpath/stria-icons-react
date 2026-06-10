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
var ChevronsUp_exports = {};
__export(ChevronsUp_exports, {
  default: () => ChevronsUp_default
});
module.exports = __toCommonJS(ChevronsUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChevronsUpLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M26.858 267.766L223.999 85.797L421.14 267.766C424.218 270.609 428.108 272.016 431.999 272.016C436.311 272.016 440.608 270.297 443.749 266.859C449.749 260.359 449.343 250.266 442.858 244.266L234.858 52.266C228.702 46.578 219.296 46.578 213.14 52.266L5.14 244.266C-1.345 250.266 -1.751 260.359 4.249 266.859C10.218 273.391 20.358 273.766 26.858 267.766ZM234.858 244.24C228.702 238.553 219.296 238.553 213.14 244.24L5.14 436.24C-1.345 442.24 -1.751 452.334 4.249 458.834C10.218 465.365 20.358 465.74 26.858 459.74L223.999 277.771L421.14 459.74C424.218 462.584 428.108 463.99 431.999 463.99C436.311 463.99 440.608 462.271 443.749 458.834C449.749 452.334 449.343 442.24 442.858 436.24L234.858 244.24Z" })
  }
));
ChevronsUpLight.displayName = "ChevronsUpLight";
var ChevronsUp_default = ChevronsUpLight;
