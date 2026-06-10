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
const CartShoppingFastSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 416C213.49 416 192 437.49 192 464S213.49 512 240 512S288 490.51 288 464S266.51 416 240 416ZM528 416C501.49 416 480 437.49 480 464S501.49 512 528 512S576 490.51 576 464S554.51 416 528 416ZM633.529 44.734C627.42 36.641 618.107 32 607.967 32H185.957L183.578 19.512C181.422 8.191 171.524 0 160 0H88C74.745 0 64 10.745 64 24V24C64 37.255 74.745 48 88 48H140.141L200.424 364.491C202.58 375.811 212.477 384 224 384H552C565.255 384 576 373.255 576 360V360C576 346.745 565.255 336 552 336H243.859L234.717 288H553.123C567.406 288 579.96 278.532 583.884 264.798L638.748 72.797C641.529 63.047 639.623 52.828 633.529 44.734ZM24 144H104C117.256 144 128 133.254 128 120C128 106.744 117.256 96 104 96H24C10.746 96 0 106.744 0 120C0 133.254 10.746 144 24 144ZM24 224H120C133.256 224 144 213.254 144 200C144 186.744 133.256 176 120 176H24C10.746 176 0 186.744 0 200C0 213.254 10.746 224 24 224ZM136 256H24C10.746 256 0 266.744 0 280C0 293.254 10.746 304 24 304H136C149.256 304 160 293.254 160 280C160 266.744 149.256 256 136 256Z" })
  }
));
CartShoppingFastSolid.displayName = "CartShoppingFastSolid";
var CartShoppingFast_default = CartShoppingFastSolid;
