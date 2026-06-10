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
var Outdent_exports = {};
__export(Outdent_exports, {
  default: () => Outdent_default
});
module.exports = __toCommonJS(Outdent_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OutdentLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M118.781 161.5C116.625 160.5 114.312 160 112 160C108.312 160 104.688 161.25 101.75 163.719L5.75 243.727C2.094 246.759 0 251.259 0 256.01C0 260.76 2.094 265.261 5.75 268.292L101.75 348.3C104.686 350.758 108.316 352 111.984 352C114.289 352 116.609 351.508 118.781 350.519C124.406 347.863 128 342.237 128 336.018V176.002C128 169.782 124.406 164.157 118.781 161.5ZM96 301.85L40.998 256.01L96 210.169V301.85ZM16 80H432C440.844 80 448 72.844 448 64S440.844 48 432 48H16C7.156 48 0 55.156 0 64S7.156 80 16 80ZM432 176H208C199.156 176 192 183.156 192 192S199.156 208 208 208H432C440.844 208 448 200.844 448 192S440.844 176 432 176ZM432 304H208C199.156 304 192 311.156 192 320S199.156 336 208 336H432C440.844 336 448 328.844 448 320S440.844 304 432 304ZM432 432H16C7.156 432 0 439.156 0 448S7.156 464 16 464H432C440.844 464 448 456.844 448 448S440.844 432 432 432Z" })
  }
));
OutdentLight.displayName = "OutdentLight";
var Outdent_default = OutdentLight;
