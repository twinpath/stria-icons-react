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
var CoffinCross_exports = {};
__export(CoffinCross_exports, {
  default: () => CoffinCross_default
});
module.exports = __toCommonJS(CoffinCross_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CoffinCrossRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M374.537 115.25L266.765 9.375C260.639 3.375 252.262 0 243.635 0H140.365C131.738 0 123.361 3.375 117.235 9.375L9.463 115.25C1.461 123.125 -1.789 134.625 0.961 145.625L88.104 487.75C91.73 502 104.732 512 119.735 512H264.39C279.268 512 292.27 502 295.896 487.75L383.039 145.625C385.789 134.625 382.539 123.125 374.537 115.25ZM252.512 464H131.488L49.846 142.875L146.491 48H237.509L334.154 142.875L252.512 464ZM216.005 120.002C216.005 106.746 205.259 96 192.003 96H191.997C178.741 96 167.995 106.746 167.995 120.002V160H119.979C106.725 160 95.98 170.744 95.98 183.998V184.002C95.98 197.256 106.725 208 119.979 208H167.995V327.998C167.995 341.254 178.741 352 191.997 352H192.003C205.259 352 216.005 341.254 216.005 327.998V208H264.018C277.274 208 288.02 197.254 288.02 183.998V183.998C288.02 170.744 277.275 160 264.021 160H216.005V120.002Z" })
  }
));
CoffinCrossRegular.displayName = "CoffinCrossRegular";
var CoffinCross_default = CoffinCrossRegular;
