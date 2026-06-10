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
const CartFlatbedLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 384H112V48C112 21.531 90.469 0 64 0H16C7.156 0 0 7.156 0 16S7.156 32 16 32H64C72.812 32 80 39.172 80 48V400C80 408.844 87.156 416 96 416H168.877C163.379 425.447 160 436.283 160 448C160 483.346 188.654 512 224 512C259.348 512 288 483.346 288 448C288 436.283 284.621 425.447 279.123 416H456.877C451.379 425.447 448 436.283 448 448C448 483.346 476.654 512 512 512C547.348 512 576 483.346 576 448C576 436.283 572.621 425.447 567.123 416H640C648.844 416 656 408.844 656 400S648.844 384 640 384ZM224 480C206.355 480 192 465.645 192 448S206.355 416 224 416S256 430.355 256 448S241.645 480 224 480ZM512 480C494.355 480 480 465.645 480 448S494.355 416 512 416S544 430.355 544 448S529.645 480 512 480ZM240 320H528C563.348 320 592 291.346 592 256V96C592 60.652 563.348 32 528 32H240C204.654 32 176 60.652 176 96V256C176 291.346 204.654 320 240 320ZM352 64H416V146.109L392.875 130.688C387.5 127.094 380.5 127.094 375.125 130.688L352 146.109V64ZM208 96C208 78.355 222.355 64 240 64H320V176C320 181.906 323.25 187.328 328.453 190.109C333.641 192.891 339.969 192.578 344.875 189.313L384 163.234L423.125 189.312C425.797 191.094 428.891 192 432 192C434.594 192 437.188 191.375 439.547 190.109C444.75 187.328 448 181.906 448 176V64H528C545.645 64 560 78.355 560 96V256C560 273.645 545.645 288 528 288H240C222.355 288 208 273.645 208 256V96Z" })
  }
));
CartFlatbedLight.displayName = "CartFlatbedLight";
var CartFlatbed_default = CartFlatbedLight;
