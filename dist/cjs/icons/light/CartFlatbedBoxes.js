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
var CartFlatbedBoxes_exports = {};
__export(CartFlatbedBoxes_exports, {
  default: () => CartFlatbedBoxes_default
});
module.exports = __toCommonJS(CartFlatbedBoxes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CartFlatbedBoxesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 384H112V48C112 21.531 90.469 0 64 0H16C7.156 0 0 7.156 0 16S7.156 32 16 32H64C72.812 32 80 39.172 80 48V400C80 408.844 87.156 416 96 416H168.877C163.379 425.447 160 436.283 160 448C160 483.346 188.654 512 224 512C259.348 512 288 483.346 288 448C288 436.283 284.621 425.447 279.123 416H456.877C451.379 425.447 448 436.283 448 448C448 483.346 476.654 512 512 512C547.348 512 576 483.346 576 448C576 436.283 572.621 425.447 567.123 416H640C648.844 416 656 408.844 656 400S648.844 384 640 384ZM224 480C206.355 480 192 465.645 192 448S206.355 416 224 416S256 430.355 256 448S241.645 480 224 480ZM512 480C494.355 480 480 465.645 480 448S494.355 416 512 416S544 430.355 544 448S529.645 480 512 480ZM208 320H336C353.674 320 368 305.672 368 288V64C368 46.326 353.674 32 336 32H208C190.328 32 176 46.326 176 64V288C176 305.672 190.328 320 208 320ZM208 64H336V288H208V64ZM432 320H560C577.674 320 592 305.672 592 288V224C592 206.326 577.674 192 560 192H432C414.328 192 400 206.326 400 224V288C400 305.672 414.328 320 432 320ZM432 224H560V288H432V224ZM432 160H496C513.674 160 528 145.672 528 128V64C528 46.326 513.674 32 496 32H432C414.328 32 400 46.326 400 64V128C400 145.672 414.328 160 432 160ZM432 64H496V128H432V64Z" })
  }
));
CartFlatbedBoxesLight.displayName = "CartFlatbedBoxesLight";
var CartFlatbedBoxes_default = CartFlatbedBoxesLight;
