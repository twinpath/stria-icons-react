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
const LaptopMobileRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 64C112 55.178 119.178 48 128 48H448C456.822 48 464 55.178 464 64V96H512V64C512 28.654 483.348 0 448 0H128C92.654 0 64 28.654 64 64V320H16C7.164 320 0 327.162 0 336C0 362.51 21.49 384 48 384H352V320H112V64ZM576 128H448C412.654 128 384 156.654 384 192V448C384 483.346 412.654 512 448 512H576C611.348 512 640 483.346 640 448V192C640 156.654 611.348 128 576 128ZM592 448C592 456.822 584.822 464 576 464H448C439.178 464 432 456.822 432 448V192C432 183.178 439.178 176 448 176H576C584.822 176 592 183.178 592 192V448Z" })
  }
));
LaptopMobileRegular.displayName = "LaptopMobileRegular";
var LaptopMobile_default = LaptopMobileRegular;
