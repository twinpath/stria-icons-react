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
var Vials_exports = {};
__export(Vials_exports, {
  default: () => Vials_default
});
module.exports = __toCommonJS(Vials_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VialsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 96C167.156 96 160 103.156 160 112V256H64V112C64 103.156 56.844 96 48 96S32 103.156 32 112V400C32 444.125 67.875 480 112 480S192 444.125 192 400V112C192 103.156 184.844 96 176 96ZM160 400C160 426.469 138.469 448 112 448S64 426.469 64 400V288H160V400ZM464 96C455.156 96 448 103.156 448 112V256H352V112C352 103.156 344.844 96 336 96S320 103.156 320 112V400C320 444.125 355.875 480 400 480S480 444.125 480 400V112C480 103.156 472.844 96 464 96ZM448 400C448 426.469 426.469 448 400 448S352 426.469 352 400V288H448V400ZM208 32H16C7.156 32 0 39.156 0 48S7.156 64 16 64H208C216.844 64 224 56.844 224 48S216.844 32 208 32ZM496 32H304C295.156 32 288 39.156 288 48S295.156 64 304 64H496C504.844 64 512 56.844 512 48S504.844 32 496 32Z" })
  }
));
VialsLight.displayName = "VialsLight";
var Vials_default = VialsLight;
