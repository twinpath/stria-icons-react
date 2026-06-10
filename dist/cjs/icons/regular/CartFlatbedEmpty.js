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
var CartFlatbedEmpty_exports = {};
__export(CartFlatbedEmpty_exports, {
  default: () => CartFlatbedEmpty_default
});
module.exports = __toCommonJS(CartFlatbedEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CartFlatbedEmptyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 399.996H144V64C144 28.799 115.199 0 80 0H24C10.801 0 0 10.801 0 24C0 37.201 10.801 48 24 48H72C85.254 48 96 58.744 96 72V415.996C96 433.596 110.4 447.996 128 447.996H162.939C161.15 453.025 160 458.357 160 464C160 490.51 181.49 512 208 512S256 490.51 256 464C256 458.357 254.85 453.025 253.061 447.996H450.939C449.15 453.025 448 458.357 448 464C448 490.51 469.49 512 496 512S544 490.51 544 464C544 458.357 542.85 453.025 541.061 447.996H616C629.199 447.996 640 437.197 640 423.996C640 410.797 629.199 399.996 616 399.996Z" })
  }
));
CartFlatbedEmptyRegular.displayName = "CartFlatbedEmptyRegular";
var CartFlatbedEmpty_default = CartFlatbedEmptyRegular;
