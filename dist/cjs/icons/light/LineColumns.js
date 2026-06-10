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
var LineColumns_exports = {};
__export(LineColumns_exports, {
  default: () => LineColumns_default
});
module.exports = __toCommonJS(LineColumns_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LineColumnsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 432H16C7.156 432 0 439.156 0 448S7.156 464 16 464H208C216.844 464 224 456.844 224 448S216.844 432 208 432ZM496 432H304C295.156 432 288 439.156 288 448S295.156 464 304 464H496C504.844 464 512 456.844 512 448S504.844 432 496 432ZM208 304H16C7.156 304 0 311.156 0 320S7.156 336 16 336H208C216.844 336 224 328.844 224 320S216.844 304 208 304ZM496 304H304C295.156 304 288 311.156 288 320S295.156 336 304 336H496C504.844 336 512 328.844 512 320S504.844 304 496 304ZM208 176H16C7.156 176 0 183.156 0 192S7.156 208 16 208H208C216.844 208 224 200.844 224 192S216.844 176 208 176ZM496 176H304C295.156 176 288 183.156 288 192S295.156 208 304 208H496C504.844 208 512 200.844 512 192S504.844 176 496 176ZM208 48H16C7.156 48 0 55.156 0 64S7.156 80 16 80H208C216.844 80 224 72.844 224 64S216.844 48 208 48ZM304 80H496C504.844 80 512 72.844 512 64S504.844 48 496 48H304C295.156 48 288 55.156 288 64S295.156 80 304 80Z" })
  }
));
LineColumnsLight.displayName = "LineColumnsLight";
var LineColumns_default = LineColumnsLight;
