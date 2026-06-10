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
var Diamond_exports = {};
__export(Diamond_exports, {
  default: () => Diamond_default
});
module.exports = __toCommonJS(Diamond_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiamondLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.97 222.129L289.871 14.029C280.517 4.676 268.259 0 256 0C243.742 0 231.482 4.676 222.128 14.029L14.029 222.129C-4.676 240.834 -4.676 271.164 14.029 289.871L222.128 497.969C231.482 507.322 243.742 512 256 512C268.259 512 280.517 507.322 289.871 497.969L497.97 289.871C516.675 271.164 516.675 240.834 497.97 222.129ZM475.343 267.244L267.244 475.342C263.191 479.395 258.46 480 256 480C253.541 480 248.808 479.395 244.755 475.342L36.658 267.246C30.458 261.045 30.457 250.957 36.658 244.758L244.757 36.658C248.808 32.605 253.541 32 256 32C258.46 32 263.191 32.605 267.244 36.658L475.343 244.756C481.542 250.957 481.542 261.045 475.343 267.244Z" })
  }
));
DiamondLight.displayName = "DiamondLight";
var Diamond_default = DiamondLight;
