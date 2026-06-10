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
var CartFlatbed_exports = {};
__export(CartFlatbed_exports, {
  default: () => CartFlatbed_default
});
module.exports = __toCommonJS(CartFlatbed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CartFlatbedRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 399.997H144V64C144 28.8 115.2 0 80 0H24C10.801 0 0 10.801 0 24C0 37.201 10.801 48 24 48H72C85.255 48 96 58.745 96 72V415.997C96 433.597 110.4 447.997 128 447.997H162.939C161.15 453.026 160 458.358 160 464C160 490.51 181.49 512 208 512S256 490.51 256 464C256 458.358 254.85 453.026 253.061 447.997H450.939C449.15 453.026 448 458.358 448 464C448 490.51 469.49 512 496 512S544 490.51 544 464C544 458.358 542.85 453.026 541.061 447.997H616C629.199 447.997 640 437.198 640 423.997C640 410.798 629.199 399.997 616 399.997ZM256 352.001H544C579.346 352.001 608 323.347 608 288.002V96.003C608 60.656 579.346 32.004 544 32.004H256C220.654 32.004 192 60.656 192 96.003V288.002C192 323.347 220.654 352.001 256 352.001ZM240 96.003C240 87.181 247.178 80.003 256 80.003H336V192.002L400 160.003L464 192.002V80.003H544C552.822 80.003 560 87.181 560 96.003V288.002C560 296.824 552.822 304.002 544 304.002H256C247.178 304.002 240 296.824 240 288.002V96.003Z" })
  }
));
CartFlatbedRegular.displayName = "CartFlatbedRegular";
var CartFlatbed_default = CartFlatbedRegular;
