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
var ChevronsLeft_exports = {};
__export(ChevronsLeft_exports, {
  default: () => ChevronsLeft_default
});
module.exports = __toCommonJS(ChevronsLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChevronsLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M235.766 453.142L53.797 256.001L235.766 58.86C238.609 55.782 240.016 51.892 240.016 48.001C240.016 43.689 238.297 39.392 234.859 36.251C228.359 30.251 218.266 30.657 212.266 37.142L20.266 245.142C14.578 251.298 14.578 260.704 20.266 266.86L212.266 474.86C218.266 481.345 228.359 481.751 234.859 475.751C241.391 469.782 241.766 459.642 235.766 453.142ZM212.24 245.142C206.553 251.298 206.553 260.704 212.24 266.86L404.24 474.86C410.24 481.345 420.334 481.751 426.834 475.751C433.365 469.782 433.74 459.642 427.74 453.142L245.771 256.001L427.74 58.86C430.584 55.782 431.99 51.892 431.99 48.001C431.99 43.689 430.271 39.392 426.834 36.251C420.334 30.251 410.24 30.657 404.24 37.142L212.24 245.142Z" })
  }
));
ChevronsLeftLight.displayName = "ChevronsLeftLight";
var ChevronsLeft_default = ChevronsLeftLight;
