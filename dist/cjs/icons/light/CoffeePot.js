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
var CoffeePot_exports = {};
__export(CoffeePot_exports, {
  default: () => CoffeePot_default
});
module.exports = __toCommonJS(CoffeePot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CoffeePotLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M431.5 177.625L472.99 53.055C476.439 42.695 468.729 32 457.809 32H80C35.816 32 0 67.816 0 112V208C0 216.799 7.199 224 16 224S32 216.799 32 208V112C32 85.49 53.49 64 80 64H106.625L144.75 178.125C95.375 217.875 64 277.75 64 344.625C64 396.104 82.609 429.348 113.588 462.334C124.305 473.746 139.471 480 155.125 480H420.875C436.404 480 451.451 473.812 462.111 462.52C493.195 429.598 512 396.199 512 344.625C512 278.375 481.375 217.875 431.5 177.625ZM140.375 64H435.625L403.625 160H172.375L140.375 64ZM178.5 192H398.25C419.25 208.875 452.875 234.125 470.75 288H105.375C123.5 234 158.25 208.375 178.5 192ZM439 440.5C434.25 445.375 427.625 448.125 420.875 448H155.125C148.25 448.125 141.75 445.375 137 440.375C107.125 408.75 96 382.75 96 344.625C96.125 336.375 96.75 328.125 97.875 320H478.125C479.375 328.125 480 336.375 480 344.625C480 382.75 468.875 408.75 439 440.5Z" })
  }
));
CoffeePotLight.displayName = "CoffeePotLight";
var CoffeePot_default = CoffeePotLight;
