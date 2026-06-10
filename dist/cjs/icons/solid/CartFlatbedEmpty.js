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
const CartFlatbedEmptySolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 400V432C640 440.801 632.801 448 624 448H541.062C542.85 453.027 544 458.359 544 464C544 490.508 522.51 512 496 512S448 490.508 448 464C448 458.359 449.15 453.027 450.938 448H253.062C254.85 453.027 256 458.359 256 464C256 490.508 234.51 512 208 512S160 490.508 160 464C160 458.359 161.15 453.027 162.938 448H80C71.201 448 64 440.801 64 432V80C64 71.164 56.838 64 48 64H16C7.201 64 0 56.801 0 48V16C0 7.199 7.201 0 16 0H64C99.201 0 128 28.801 128 64V384H624C632.801 384 640 391.199 640 400Z" })
  }
));
CartFlatbedEmptySolid.displayName = "CartFlatbedEmptySolid";
var CartFlatbedEmpty_default = CartFlatbedEmptySolid;
