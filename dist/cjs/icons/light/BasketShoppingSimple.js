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
const BasketShoppingSimpleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 192H419.094L350.984 10.375C347.875 2.078 338.625 -2.047 330.375 1.016C322.109 4.125 317.922 13.344 321.016 21.625L384.906 192H191.094L254.984 21.625C258.078 13.344 253.891 4.125 245.625 1.016C237.359 -2.063 228.125 2.078 225.016 10.375L156.906 192H16C7.164 192 0 199.162 0 208C0 216.836 7.164 224 16 224H32L84.863 461.883C91.371 491.166 117.342 512 147.34 512H428.662C458.658 512 484.631 491.166 491.137 461.883L544 224H560C568.836 224 576 216.836 576 208C576 199.162 568.836 192 560 192ZM459.898 454.941C456.621 469.695 443.775 480 428.662 480H147.34C132.227 480 119.381 469.695 116.102 454.941L64.781 224H144.906L129.016 266.375C125.922 274.656 130.109 283.875 138.375 286.984C140.234 287.672 142.125 288 144 288C150.469 288 156.578 284.047 158.984 277.625L179.094 224H396.906L417.016 277.625C419.422 284.047 425.531 288 432 288C433.875 288 435.766 287.672 437.625 286.984C445.891 283.875 450.078 274.656 446.984 266.375L431.094 224H511.219L459.898 454.941Z" })
  }
));
BasketShoppingSimpleLight.displayName = "BasketShoppingSimpleLight";
var BasketShoppingSimple_default = BasketShoppingSimpleLight;
