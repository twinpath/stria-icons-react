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
var DiceSix_exports = {};
__export(DiceSix_exports, {
  default: () => DiceSix_default
});
module.exports = __toCommonJS(DiceSix_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceSixRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 128C110.375 128 96 142.375 96 160S110.375 192 128 192S160 177.625 160 160S145.625 128 128 128ZM128 224C110.375 224 96 238.375 96 256S110.375 288 128 288S160 273.625 160 256S145.625 224 128 224ZM128 320C110.375 320 96 334.375 96 352S110.375 384 128 384S160 369.625 160 352S145.625 320 128 320ZM384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H384C419.375 480 448 451.375 448 416V96C448 60.625 419.375 32 384 32ZM400 416C400 424.875 392.875 432 384 432H64C55.125 432 48 424.875 48 416V96C48 87.125 55.125 80 64 80H384C392.875 80 400 87.125 400 96V416ZM320 128C302.375 128 288 142.375 288 160S302.375 192 320 192S352 177.625 352 160S337.625 128 320 128ZM320 320C302.375 320 288 334.375 288 352S302.375 384 320 384S352 369.625 352 352S337.625 320 320 320ZM320 224C302.375 224 288 238.375 288 256S302.375 288 320 288S352 273.625 352 256S337.625 224 320 224Z " })
  }
));
DiceSixRegular.displayName = "DiceSixRegular";
var DiceSix_default = DiceSixRegular;
