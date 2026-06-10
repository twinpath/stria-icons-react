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
var Cars_exports = {};
__export(Cars_exports, {
  default: () => Cars_default
});
module.exports = __toCommonJS(Cars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M88 200C88 213.254 98.746 224 112 224S136 213.254 136 200C136 186.744 125.254 176 112 176S88 186.744 88 200ZM244.842 240H48V200C48 173.533 69.533 152 96 152H293.631C311.764 136.893 334.787 128 359.609 128H382.191C380.873 126.863 379.818 125.449 378.441 124.383L346.625 44.84C335.721 17.596 309.725 0 280.393 0H135.609C106.277 0 80.281 17.596 69.381 44.828L37.561 124.383C14.879 141.957 0 169.152 0 200V320C0 337.672 14.326 352 32 352S64 337.672 64 320V288H214.854C220.607 279.715 227.113 271.891 234.844 265L244.842 240ZM113.943 62.664C117.508 53.76 126.012 48 135.609 48H280.393C289.99 48 298.494 53.76 302.059 62.664L318.592 104H97.41L113.943 62.664ZM336 336C322.746 336 312 346.744 312 360C312 373.254 322.746 384 336 384S360 373.254 360 360C360 346.744 349.254 336 336 336ZM528 336C514.746 336 504 346.744 504 360C504 373.254 514.746 384 528 384S552 373.254 552 360C552 346.744 541.254 336 528 336ZM602.441 284.383L570.625 204.84C559.721 177.596 533.725 160 504.393 160H359.609C330.277 160 304.281 177.596 293.381 204.828L261.561 284.383C238.879 301.957 224 329.152 224 360V480C224 497.672 238.326 512 256 512S288 497.672 288 480V448H576V480C576 497.672 590.326 512 608 512S640 497.672 640 480V360C640 329.152 625.121 301.957 602.441 284.383ZM337.943 222.664C341.508 213.76 350.012 208 359.609 208H504.393C513.99 208 522.494 213.76 526.059 222.664L542.592 264H321.41L337.943 222.664ZM592 400H272V360C272 333.533 293.533 312 320 312H544C570.467 312 592 333.533 592 360V400Z" })
  }
));
CarsRegular.displayName = "CarsRegular";
var Cars_default = CarsRegular;
