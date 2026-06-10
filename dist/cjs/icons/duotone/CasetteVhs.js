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
var CasetteVhs_exports = {};
__export(CasetteVhs_exports, {
  default: () => CasetteVhs_default
});
module.exports = __toCommonJS(CasetteVhs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CasetteVhsDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 432.001C0 458.508 21.49 480.001 48 480.001H528C554.51 480.001 576 458.508 576 432.001V128.001H0V432.001ZM416 224.001H464.875C484 245.251 496 273.126 496 304.001S484 362.751 464.875 384.001H416V224.001ZM224 224.001H352V384.001H224V224.001ZM111.125 224.001H160V384.001H111.125C92 362.751 80 334.876 80 304.001S92 245.251 111.125 224.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 304C80 334.879 92 362.74 111.141 384H160V349.059C135.113 340.367 121.986 313.145 130.68 288.26C135.477 274.529 146.27 263.736 160 258.939V224H111.141C92 245.27 80 273.129 80 304ZM416 224V258.939C440.887 267.633 454.014 294.854 445.32 319.74C440.523 333.469 429.73 344.264 416 349.059V384H464.859C484 362.73 496 334.869 496 304C496 273.129 484 245.26 464.859 224H416ZM528 32H48C21.49 32 0 53.492 0 80V128H576V80C576 53.492 554.51 32 528 32Z" })
    ]
  }
));
CasetteVhsDuotone.displayName = "CasetteVhsDuotone";
var CasetteVhs_default = CasetteVhsDuotone;
