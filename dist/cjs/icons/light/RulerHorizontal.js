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
var RulerHorizontal_exports = {};
__export(RulerHorizontal_exports, {
  default: () => RulerHorizontal_default
});
module.exports = __toCommonJS(RulerHorizontal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RulerHorizontalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M592 128H48C21.49 128 0 149.49 0 176V336C0 362.51 21.49 384 48 384H592C618.51 384 640 362.51 640 336V176C640 149.49 618.51 128 592 128ZM608 336C608 344.822 600.822 352 592 352H48C39.178 352 32 344.822 32 336V176C32 167.178 39.178 160 48 160H112V224C112 232.844 119.156 240 128 240S144 232.844 144 224V160H208V224C208 232.844 215.156 240 224 240S240 232.844 240 224V160H304V224C304 232.844 311.156 240 320 240S336 232.844 336 224V160H400V224C400 232.844 407.156 240 416 240S432 232.844 432 224V160H496V224C496 232.844 503.156 240 512 240S528 232.844 528 224V160H592C600.822 160 608 167.178 608 176V336Z" })
  }
));
RulerHorizontalLight.displayName = "RulerHorizontalLight";
var RulerHorizontal_default = RulerHorizontalLight;
