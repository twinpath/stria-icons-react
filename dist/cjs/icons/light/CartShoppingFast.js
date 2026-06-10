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
var CartShoppingFast_exports = {};
__export(CartShoppingFast_exports, {
  default: () => CartShoppingFast_default
});
module.exports = __toCommonJS(CartShoppingFast_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CartShoppingFastLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M520.008 400C489.08 400 464.008 425.072 464.008 456S489.08 512 520.008 512C550.937 512 576.01 486.928 576.01 456S550.938 400 520.008 400ZM520.008 480C506.773 480 496.008 469.232 496.008 456C496.008 442.766 506.773 432 520.008 432C533.244 432 544.01 442.766 544.01 456C544.01 469.232 533.244 480 520.008 480ZM633.855 76.719C627.854 68.75 618.197 64 608.01 64H171.311L159.596 12.469C157.939 5.156 151.471 0 144.002 0H80C71.156 0 64 7.156 64 16S71.156 32 80 32H131.221L208.41 371.531C210.066 378.844 216.535 384 224.004 384H560.01C568.854 384 576.01 376.844 576.01 368S568.854 352 560.01 352H236.785L229.51 320H540.229C561.791 320 580.854 306.125 586.541 286.25L638.824 103.188C641.449 94.031 639.637 84.406 633.855 76.719ZM555.791 277.438C554.01 283.656 547.604 288 540.229 288H224.004C223.404 288 222.895 288.275 222.313 288.34L178.57 95.934L608.072 94.375L555.791 277.438ZM248.004 400C217.076 400 192.002 425.072 192.002 456S217.076 512 248.004 512S304.004 486.928 304.004 456S278.932 400 248.004 400ZM248.004 480C234.77 480 224.004 469.232 224.004 456C224.004 442.766 234.77 432 248.004 432S272.004 442.766 272.004 456C272.004 469.232 261.238 480 248.004 480ZM16 224H128C136.838 224 144 216.836 144 208C144 199.162 136.838 192 128 192H16C7.164 192 0 199.162 0 208C0 216.836 7.164 224 16 224ZM16 160H112C120.838 160 128 152.836 128 144C128 135.162 120.838 128 112 128H16C7.164 128 0 135.162 0 144C0 152.836 7.164 160 16 160ZM144 256H16C7.164 256 0 263.162 0 272C0 280.836 7.164 288 16 288H144C152.838 288 160 280.836 160 272C160 263.162 152.838 256 144 256Z" })
  }
));
CartShoppingFastLight.displayName = "CartShoppingFastLight";
var CartShoppingFast_default = CartShoppingFastLight;
