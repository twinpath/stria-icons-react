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
var PesoSign_exports = {};
__export(PesoSign_exports, {
  default: () => PesoSign_default
});
module.exports = __toCommonJS(PesoSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PesoSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 224H341.979C342.762 217.357 344 210.85 344 204C344 199.891 343.072 196.037 342.787 192H360C373.25 192 384 181.25 384 168S373.25 144 360 144H332.605C308.143 78.775 245.664 32 172 32H88C65.909 32 48 49.909 48 72V144H24C10.75 144 0 154.75 0 168S10.75 192 24 192H48V224H24C10.75 224 0 234.75 0 248S10.75 272 24 272H48V456C48 469.25 58.75 480 72 480S96 469.25 96 456V376H172C242.682 376 303.436 333.088 329.857 272H360C373.25 272 384 261.25 384 248S373.25 224 360 224ZM96 80H172C218.5 80 258.619 106.031 279.838 144H96V80ZM96 192H294.787C295.18 196.008 296 199.891 296 204C296 210.85 295.051 217.449 293.979 224H96V192ZM172 328H96V272H275.492C253.297 305.666 215.254 328 172 328Z" })
  }
));
PesoSignRegular.displayName = "PesoSignRegular";
var PesoSign_default = PesoSignRegular;
