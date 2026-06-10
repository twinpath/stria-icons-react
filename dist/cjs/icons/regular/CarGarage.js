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
var CarGarage_exports = {};
__export(CarGarage_exports, {
  default: () => CarGarage_default
});
module.exports = __toCommonJS(CarGarage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarGarageRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224.007 336C210.753 336 200.007 346.744 200.007 360C200.007 373.254 210.753 384 224.007 384S248.007 373.254 248.007 360C248.007 346.744 237.261 336 224.007 336ZM416.007 336C402.753 336 392.007 346.744 392.007 360C392.007 373.254 402.753 384 416.007 384S440.007 373.254 440.007 360C440.007 346.744 429.261 336 416.007 336ZM490.448 284.383L475.165 246.174L458.632 204.838C447.728 177.596 421.732 160 392.4 160H247.616C218.282 160 192.286 177.596 181.386 204.828L164.849 246.174L149.566 284.385C126.886 301.959 112.007 329.152 112.007 360V480C112.007 497.672 126.333 512 144.007 512S176.007 497.672 176.007 480V448H464.007V480C464.007 497.672 478.333 512 496.007 512S528.007 497.672 528.007 480V360C528.007 329.152 513.128 301.957 490.448 284.383ZM225.95 222.664C229.515 213.76 238.019 208 247.616 208H392.4C401.997 208 410.501 213.76 414.064 222.664L430.599 264H209.417L225.95 222.664ZM480.007 400H160.007V360C160.007 333.533 181.54 312 208.007 312H432.007C458.474 312 480.007 333.533 480.007 360V400ZM640.014 184.012C640.014 175.484 635.451 167.227 627.413 162.891L331.413 2.891C327.866 0.969 323.937 0.008 320.007 0.008S312.148 0.969 308.601 2.891L12.601 162.891C4.563 167.227 0 175.484 0 184.012C0 196.493 10.068 208.004 24.039 208.004C27.889 208.004 31.792 207.073 35.413 205.109L320.007 51.281L604.601 205.109C608.226 207.078 612.132 208 615.991 208C630.151 208 640.014 196.368 640.014 184.012Z " })
  }
));
CarGarageRegular.displayName = "CarGarageRegular";
var CarGarage_default = CarGarageRegular;
