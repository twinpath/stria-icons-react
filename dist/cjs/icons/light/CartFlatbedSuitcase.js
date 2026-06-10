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
var CartFlatbedSuitcase_exports = {};
__export(CartFlatbedSuitcase_exports, {
  default: () => CartFlatbedSuitcase_default
});
module.exports = __toCommonJS(CartFlatbedSuitcase_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CartFlatbedSuitcaseLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 384H112V48C112 21.531 90.469 0 64 0H16C7.156 0 0 7.156 0 16S7.156 32 16 32H64C72.812 32 80 39.172 80 48V400C80 408.844 87.156 416 96 416H168.877C163.379 425.447 160 436.283 160 448C160 483.346 188.654 512 224 512C259.348 512 288 483.346 288 448C288 436.283 284.621 425.447 279.123 416H456.877C451.379 425.447 448 436.283 448 448C448 483.346 476.654 512 512 512C547.348 512 576 483.346 576 448C576 436.283 572.621 425.447 567.123 416H640C648.844 416 656 408.844 656 400S648.844 384 640 384ZM224 480C206.355 480 192 465.645 192 448S206.355 416 224 416S256 430.355 256 448S241.645 480 224 480ZM512 480C494.355 480 480 465.645 480 448S494.355 416 512 416S544 430.355 544 448S529.645 480 512 480ZM272 320H528C563.348 320 592 291.346 592 256V128C592 92.652 563.348 64 528 64H496V48C496 21.531 474.469 0 448 0H352C325.531 0 304 21.531 304 48V64H272C236.654 64 208 92.652 208 128V256C208 291.346 236.654 320 272 320ZM528 96C545.645 96 560 110.355 560 128V256C560 273.645 545.645 288 528 288V96ZM336 48C336 39.172 343.188 32 352 32H448C456.812 32 464 39.172 464 48V64H336V48ZM304 96H496V288H304V96ZM240 128C240 110.355 254.355 96 272 96V288C254.355 288 240 273.645 240 256V128Z" })
  }
));
CartFlatbedSuitcaseLight.displayName = "CartFlatbedSuitcaseLight";
var CartFlatbedSuitcase_default = CartFlatbedSuitcaseLight;
