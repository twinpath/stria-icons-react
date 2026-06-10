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
var BasketShoppingSimple_exports = {};
__export(BasketShoppingSimple_exports, {
  default: () => BasketShoppingSimple_default
});
module.exports = __toCommonJS(BasketShoppingSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BasketShoppingSimpleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 191.997H458.395L365.281 12.934C359.219 1.183 344.719 -3.41 332.938 2.715C321.156 8.808 316.594 23.309 322.719 35.059L404.326 191.997H171.674L253.281 35.059C259.406 23.309 254.844 8.808 243.062 2.715C231.344 -3.379 216.812 1.215 210.719 12.933L117.605 191.997H16C7.164 191.997 0 199.162 0 207.998V239.998C0 248.834 7.164 255.998 16 255.998H39.111L84.863 461.882C91.371 491.166 117.342 512 147.34 512H428.662C458.658 512 484.631 491.166 491.137 461.882L536.889 255.998H560C568.838 255.998 576 248.834 576 239.998V207.998C576 199.162 568.838 191.997 560 191.997ZM144 295.998C130.746 295.998 120 285.252 120 271.998C120 258.744 130.746 247.998 144 247.998C157.256 247.998 168 258.744 168 271.998C168 285.252 157.256 295.998 144 295.998ZM432 295.998C418.746 295.998 408 285.252 408 271.998C408 258.744 418.746 247.998 432 247.998C445.256 247.998 456 258.744 456 271.998C456 285.252 445.256 295.998 432 295.998Z" })
  }
));
BasketShoppingSimpleSolid.displayName = "BasketShoppingSimpleSolid";
var BasketShoppingSimple_default = BasketShoppingSimpleSolid;
