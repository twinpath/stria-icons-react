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
const RulerVerticalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 464V48C256 21.6 234.4 0 208 0H48C21.6 0 0 21.6 0 48V464C0 490.4 21.6 512 48 512H208C234.4 512 256 490.4 256 464ZM48 464V48H208V96H160C151.2 96 144 103.2 144 112V112C144 120.8 151.2 128 160 128H208V192H160C151.2 192 144 199.2 144 208V208C144 216.8 151.2 224 160 224H208V288H160C151.2 288 144 295.2 144 304V304C144 312.8 151.2 320 160 320H208V384H160C151.2 384 144 391.2 144 400V400C144 408.8 151.2 416 160 416H208V464H48Z" })
  }
));
RulerVerticalRegular.displayName = "RulerVerticalRegular";
var RulerVertical_default = RulerVerticalRegular;
