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
var RulerVertical_exports = {};
__export(RulerVertical_exports, {
  default: () => RulerVertical_default
});
module.exports = __toCommonJS(RulerVertical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RulerVerticalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 0H48C21.49 0 0 21.49 0 48V464C0 490.51 21.49 512 48 512H208C234.51 512 256 490.51 256 464V48C256 21.49 234.51 0 208 0ZM224 96H160C151.156 96 144 103.156 144 112S151.156 128 160 128H224V192H160C151.156 192 144 199.156 144 208S151.156 224 160 224H224V288H160C151.156 288 144 295.156 144 304S151.156 320 160 320H224V384H160C151.156 384 144 391.156 144 400S151.156 416 160 416H224V464C224 472.822 216.822 480 208 480H48C39.178 480 32 472.822 32 464V48C32 39.178 39.178 32 48 32H208C216.822 32 224 39.178 224 48V96Z" })
  }
));
RulerVerticalLight.displayName = "RulerVerticalLight";
var RulerVertical_default = RulerVerticalLight;
