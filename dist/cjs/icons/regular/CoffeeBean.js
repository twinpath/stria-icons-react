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
const CoffeeBeanRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M435.832 130.482C425.932 107.15 370.127 53.215 353.178 45.668C332.133 36.297 309.838 32 287.103 32C219.762 32 148.459 69.664 93.49 124.705C21.139 197.148 -22.627 299.521 12.168 381.518C22.068 404.85 77.871 458.785 94.822 466.332C115.867 475.703 138.164 480 160.896 480C228.24 480 299.541 442.334 354.51 387.295C426.861 314.854 470.627 212.48 435.832 130.482ZM127.453 158.623C176.621 109.393 236.305 80 287.103 80C303.346 80 318.6 83.027 332.471 88.998C337.582 92.215 346.187 99.623 355.309 108.305C331.918 184.145 285.539 229.516 216.656 242.469C142.102 256.525 87.158 299.34 57.25 364.131C57.008 363.719 56.547 363.137 56.355 362.766C29.002 298.311 72.355 213.793 127.453 158.623ZM320.547 353.375C271.379 402.607 211.697 432 160.896 432C144.656 432 129.4 428.973 115.529 423C110.443 419.801 101.898 412.445 92.832 403.822C113.783 340.924 158.174 302.35 225.531 289.656C303.621 274.982 360.094 226.502 391.607 149.172C391.615 149.188 391.639 149.217 391.646 149.232C418.998 213.691 375.646 298.207 320.547 353.375Z" })
  }
));
CoffeeBeanRegular.displayName = "CoffeeBeanRegular";
var CoffeeBean_default = CoffeeBeanRegular;
