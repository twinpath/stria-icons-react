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
var ComputerClassic_exports = {};
__export(ComputerClassic_exports, {
  default: () => ComputerClassic_default
});
module.exports = __toCommonJS(ComputerClassic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ComputerClassicRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 0H64C28.654 0 0 28.654 0 64V368C0 391.629 12.951 412.037 32 423.123V480C32 497.674 46.326 512 64 512H384C401.674 512 416 497.674 416 480V423.123C435.049 412.037 448 391.629 448 368V64C448 28.654 419.346 0 384 0ZM368 464H80V432H368V464ZM400 368C400 376.822 392.822 384 384 384H64C55.178 384 48 376.822 48 368V64C48 55.178 55.178 48 64 48H384C392.822 48 400 55.178 400 64V368ZM336 80H112C94.326 80 80 94.326 80 112V208C80 225.672 94.326 240 112 240H336C353.674 240 368 225.672 368 208V112C368 94.326 353.674 80 336 80ZM120 304C106.746 304 96 314.744 96 328C96 341.254 106.746 352 120 352S144 341.254 144 328C144 314.744 133.254 304 120 304ZM352 304H224C215.156 304 208 311.156 208 320S215.156 336 224 336H352C360.844 336 368 328.844 368 320S360.844 304 352 304Z" })
  }
));
ComputerClassicRegular.displayName = "ComputerClassicRegular";
var ComputerClassic_default = ComputerClassicRegular;
