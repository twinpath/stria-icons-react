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
const CoffeeBeanSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M212.659 244.448C267.204 216.172 314.859 176.267 346.435 123.563L366.133 90.686C375.669 74.769 370.128 53.216 353.177 45.668C269.792 8.541 167.016 51.085 93.49 124.705C21.139 197.149 -22.627 299.521 12.167 381.518C22.068 404.85 55.333 405.558 68.36 383.815L73.389 375.42C106.878 319.564 154.943 274.368 212.659 244.448ZM379.64 128.185L377.69 131.44C343.181 189.041 294.99 238.702 234.574 268.005C178.491 295.206 131.868 337.89 99.835 391.327L81.867 421.315C72.331 437.232 77.872 458.785 94.822 466.332C178.208 503.461 280.983 460.916 354.51 387.296C426.861 314.853 470.627 212.481 435.832 130.483C425.931 107.15 392.667 106.442 379.64 128.185Z" })
  }
));
CoffeeBeanSolid.displayName = "CoffeeBeanSolid";
var CoffeeBean_default = CoffeeBeanSolid;
