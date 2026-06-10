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
var BasketShopping_exports = {};
__export(BasketShopping_exports, {
  default: () => BasketShopping_default
});
module.exports = __toCommonJS(BasketShopping_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BasketShoppingSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 192.002H458.395L365.281 12.941C359.219 1.222 344.688 -3.434 332.938 2.722C321.156 8.816 316.594 23.316 322.719 35.066L404.326 192.002H171.674L253.281 35.066C259.406 23.316 254.844 8.816 243.062 2.722C231.281 -3.402 216.812 1.222 210.719 12.941L117.605 192.002H16C7.164 192.002 0 199.166 0 208.002V240.002C0 248.838 7.164 256.002 16 256.002H39.111L84.863 461.883C91.371 491.166 117.342 512 147.34 512H428.662C458.658 512 484.631 491.166 491.137 461.883L536.889 256.002H560C568.838 256.002 576 248.838 576 240.002V208.002C576 199.166 568.838 192.002 560 192.002ZM192 432.001C192 440.835 184.834 448 176 448C167.168 448 160 440.835 160 432.001V304.002C160 295.168 167.168 288.002 176 288.002C184.834 288.002 192 295.168 192 304.002V432.001ZM304 432.001C304 440.835 296.834 448 288 448C279.168 448 272 440.835 272 432.001V304.002C272 295.168 279.168 288.002 288 288.002C296.834 288.002 304 295.168 304 304.002V432.001ZM416 432.001C416 440.835 408.834 448 400 448C391.168 448 384 440.835 384 432.001V304.002C384 295.168 391.168 288.002 400 288.002C408.834 288.002 416 295.168 416 304.002V432.001Z" })
  }
));
BasketShoppingSolid.displayName = "BasketShoppingSolid";
var BasketShopping_default = BasketShoppingSolid;
