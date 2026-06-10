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
const CartFlatbedDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 32H448V160L400 128L352 160V32H224C206.4 32 192 46.4 192 64V288C192 305.6 206.4 320 224 320H576C593.6 320 608 305.6 608 288V64C608 46.4 593.6 32 576 32ZM162.875 448C161.125 453 160 458.375 160 464C160 490.5 181.5 512 208 512S256 490.5 256 464C256 458.375 254.75 453 253.125 448H162.875ZM451 448C449.25 453 448.125 458.375 448.125 464C448.125 490.5 469.625 512 496.125 512S544.125 490.5 544.125 464C544.125 458.375 542.875 453 541.25 448H451Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32V160L400 128L352 160V32H448ZM624 384H128V64C128 28.8 99.2 0 64 0H16C7.2 0 0 7.2 0 16V48C0 56.8 7.2 64 16 64H48C56.837 64 64 71.163 64 80V432C64 440.8 71.2 448 80 448H624C632.8 448 640 440.8 640 432V400C640 391.2 632.8 384 624 384Z" })
    ]
  }
));
CartFlatbedDuotone.displayName = "CartFlatbedDuotone";
var CartFlatbed_default = CartFlatbedDuotone;
