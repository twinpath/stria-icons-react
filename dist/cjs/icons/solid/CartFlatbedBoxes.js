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
const CartFlatbedBoxesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 160H512C529.6 160 544 145.602 544 128V64C544 46.398 529.6 32 512 32H448C430.4 32 416 46.398 416 64V128C416 145.602 430.4 160 448 160ZM448 320H576C593.6 320 608 305.602 608 288V224C608 206.398 593.6 192 576 192H448C430.4 192 416 206.398 416 224V288C416 305.602 430.4 320 448 320ZM224 320H352C369.6 320 384 305.602 384 288V64C384 46.398 369.6 32 352 32H224C206.4 32 192 46.398 192 64V288C192 305.602 206.4 320 224 320ZM624 384H128V64C128 28.801 99.201 0 64 0H16C7.201 0 0 7.199 0 16V48C0 56.801 7.201 64 16 64H48C56.838 64 64 71.164 64 80V432C64 440.801 71.201 448 80 448H162.938C161.15 453.027 160 458.359 160 464C160 490.508 181.49 512 208 512S256 490.508 256 464C256 458.359 254.85 453.027 253.062 448H450.938C449.15 453.027 448 458.359 448 464C448 490.508 469.49 512 496 512S544 490.508 544 464C544 458.359 542.85 453.027 541.062 448H624C632.801 448 640 440.801 640 432V400C640 391.199 632.801 384 624 384Z" })
  }
));
CartFlatbedBoxesSolid.displayName = "CartFlatbedBoxesSolid";
var CartFlatbedBoxes_default = CartFlatbedBoxesSolid;
