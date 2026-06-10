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
var LaptopMobile_exports = {};
__export(LaptopMobile_exports, {
  default: () => LaptopMobile_default
});
module.exports = __toCommonJS(LaptopMobile_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LaptopMobileLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 128H448C412.801 128 384 156.799 384 192V448C384 483.199 412.801 512 448 512H576C611.199 512 640 483.199 640 448V192C640 156.799 611.199 128 576 128ZM608 448C608 465.672 593.674 480 576 480H448C430.326 480 416 465.672 416 448V192C416 174.326 430.326 160 448 160H576C593.674 160 608 174.326 608 192V448ZM96 64C96 46.327 110.327 32 128 32H448C465.673 32 480 46.327 480 64V80C480 88.837 487.163 96 496 96H496C504.837 96 512 88.837 512 80V64C512 28.8 483.2 0 448 0H128C92.8 0 64 28.8 64 64V288H16C7.163 288 0 295.163 0 304V320C0.125 355.25 28.625 383.875 63.875 384H336C344.837 384 352 376.837 352 368V368C352 359.163 344.837 352 336 352H63.875C46.25 352 32 337.625 32 320H336C344.837 320 352 312.837 352 304V304C352 295.163 344.837 288 336 288H96V64Z" })
  }
));
LaptopMobileLight.displayName = "LaptopMobileLight";
var LaptopMobile_default = LaptopMobileLight;
