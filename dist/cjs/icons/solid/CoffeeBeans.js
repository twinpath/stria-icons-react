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
var CoffeeBeans_exports = {};
__export(CoffeeBeans_exports, {
  default: () => CoffeeBeans_default
});
module.exports = __toCommonJS(CoffeeBeans_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CoffeeBeansSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M143.191 344.243C167.252 402.766 163.389 453.757 157.156 484.78C154.432 498.344 168.383 508.362 180.588 502.198C230.816 476.829 256.004 414.114 256.004 351.901C256.004 278.505 220.963 206.212 151.084 192.276C143.025 190.671 135.24 196.251 133.152 204.317C126.381 230.483 117.883 282.768 143.191 344.243ZM0 352.466C0 425.085 34.281 496.663 102.686 511.671C110.664 513.421 118.477 508.014 120.775 500.059C128.58 473.049 139.768 418.055 112.816 352.454C95.143 309.426 90.088 263.983 97.641 219.385C99.893 206.089 85.758 196.721 73.955 202.911C24.699 228.753 0 290.854 0 352.466ZM280.578 231.948C330.287 281.743 402.754 307.317 459.852 270.704C466.51 266.432 468.156 257.368 464.287 250.337C451.141 226.466 421.152 181.085 357.797 154.583C316.244 137.198 281.678 109.501 256.318 73.743C248.758 63.081 232.67 66.35 228.828 78.688C212.801 130.182 238.402 189.7 280.578 231.948ZM478.73 214.913C486.15 226.083 502.557 223.385 506.693 210.79C523.709 158.954 498.022 98.678 455.434 56.018C405.191 5.692 331.719 -19.853 274.346 18.508C267.729 22.932 266.221 32.098 270.312 39.059C283.59 61.645 313.562 103.323 372.967 128.124C429.5 151.755 461.76 189.368 478.73 214.913Z" })
  }
));
CoffeeBeansSolid.displayName = "CoffeeBeansSolid";
var CoffeeBeans_default = CoffeeBeansSolid;
