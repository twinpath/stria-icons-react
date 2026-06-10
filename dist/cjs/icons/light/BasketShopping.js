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
const BasketShoppingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 320C167.168 320 160 327.166 160 336V432C160 440.834 167.168 448 176 448C184.834 448 192 440.834 192 432V336C192 327.166 184.834 320 176 320ZM288 320C279.168 320 272 327.166 272 336V432C272 440.834 279.168 448 288 448C296.834 448 304 440.834 304 432V336C304 327.166 296.834 320 288 320ZM400 320C391.168 320 384 327.166 384 336V432C384 440.834 391.168 448 400 448C408.834 448 416 440.834 416 432V336C416 327.166 408.834 320 400 320ZM560 192H419.094L350.984 10.375C347.875 2.078 338.672 -2.047 330.375 1.016C322.109 4.125 317.922 13.344 321.016 21.625L384.906 192H191.094L254.984 21.625C258.078 13.344 253.891 4.125 245.625 1.016C237.344 -2.062 228.109 2.078 225.016 10.375L156.906 192H16C7.164 192 0 199.162 0 208C0 216.836 7.164 224 16 224H32L84.863 461.883C91.371 491.166 117.342 512 147.34 512H428.662C458.658 512 484.631 491.166 491.137 461.883L544 224H560C568.836 224 576 216.836 576 208C576 199.162 568.836 192 560 192ZM459.898 454.941C456.621 469.695 443.775 480 428.662 480H147.34C132.227 480 119.381 469.695 116.102 454.941L64.781 224H144.906L129.016 266.375C125.922 274.656 130.109 283.875 138.375 286.984C140.234 287.672 142.125 288 144 288C150.469 288 156.578 284.047 158.984 277.625L179.094 224H396.906L417.016 277.625C419.422 284.047 425.531 288 432 288C433.875 288 435.766 287.672 437.625 286.984C445.891 283.875 450.078 274.656 446.984 266.375L431.094 224H511.219L459.898 454.941Z" })
  }
));
BasketShoppingLight.displayName = "BasketShoppingLight";
var BasketShopping_default = BasketShoppingLight;
