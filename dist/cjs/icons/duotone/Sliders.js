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
var Sliders_exports = {};
__export(Sliders_exports, {
  default: () => Sliders_default
});
module.exports = __toCommonJS(Sliders_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SlidersDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 288H320V224H32C14.4 224 0 238.4 0 256S14.4 288 32 288ZM512 96C512 78.4 497.6 64 480 64H288V128H480C497.6 128 512 113.6 512 96ZM32 128H192V64H32C14.4 64 0 78.4 0 96S14.4 128 32 128ZM0 416C0 433.6 14.4 448 32 448H96V384H32C14.4 384 0 398.4 0 416ZM480 384H192V448H480C497.6 448 512 433.6 512 416S497.6 384 480 384ZM480 224H416V288H480C497.6 288 512 273.6 512 256S497.6 224 480 224Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C238.326 16 224 30.326 224 48V144C224 161.672 238.326 176 256 176S288 161.672 288 144V48C288 30.326 273.674 16 256 16ZM384 176C366.326 176 352 190.326 352 208V304C352 321.672 366.326 336 384 336S416 321.672 416 304V208C416 190.326 401.674 176 384 176ZM160 336C142.326 336 128 350.326 128 368V464C128 481.672 142.326 496 160 496S192 481.672 192 464V368C192 350.326 177.674 336 160 336Z" })
    ]
  }
));
SlidersDuotone.displayName = "SlidersDuotone";
var Sliders_default = SlidersDuotone;
