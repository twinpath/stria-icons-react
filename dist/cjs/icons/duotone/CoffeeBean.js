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
var CoffeeBean_exports = {};
__export(CoffeeBean_exports, {
  default: () => CoffeeBean_default
});
module.exports = __toCommonJS(CoffeeBean_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CoffeeBeanDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M354.29 387.295C280.765 460.916 177.989 503.461 94.603 466.332C77.651 458.785 72.11 437.23 81.648 421.314L99.614 391.326C131.648 337.889 178.271 295.205 234.355 268.004C294.771 238.701 342.96 189.041 377.47 131.439L379.421 128.186C392.446 106.441 425.712 107.15 435.612 130.482C470.407 212.48 426.642 314.854 354.29 387.295Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M366.133 90.686L346.436 123.562C314.859 176.266 267.205 216.172 212.658 244.447C154.943 274.367 106.877 319.562 73.389 375.42L68.359 383.814C55.332 405.559 22.068 404.85 12.168 381.518C-22.627 299.521 21.139 197.148 93.49 124.705C167.016 51.084 269.791 8.541 353.178 45.668C370.127 53.215 375.67 74.768 366.133 90.686Z" })
    ]
  }
));
CoffeeBeanDuotone.displayName = "CoffeeBeanDuotone";
var CoffeeBean_default = CoffeeBeanDuotone;
