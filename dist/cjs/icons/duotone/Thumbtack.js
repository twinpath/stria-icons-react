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
var Thumbtack_exports = {};
__export(Thumbtack_exports, {
  default: () => Thumbtack_default
});
module.exports = __toCommonJS(Thumbtack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ThumbtackDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 327.998C384 341.248 373.25 351.998 360 351.998H224V255.999C224 238.325 209.674 223.999 192 223.999S160 238.325 160 255.999V351.998H24C10.75 351.998 0 341.248 0 327.998C0 277.264 37.469 236.811 85.969 214.265L98.219 96H56C42.75 96 32 85.25 32 72V24C32 10.75 42.75 0 56 0H328C341.25 0 352 10.75 352 24V72C352 85.25 341.25 96 328 96H285.781L298.031 214.265C346.031 236.577 384 276.811 384 327.998Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 456.002C160.285 457.21 160.559 458.369 160.844 459.576L184.844 507.576C187.781 513.467 196.219 513.482 199.156 507.576L223.156 459.576C223.395 458.567 223.762 457.012 224 456.002V255.999C224 238.326 209.673 223.999 192 223.999H192C174.327 223.999 160 238.326 160 255.999V456.002Z" })
    ]
  }
));
ThumbtackDuotone.displayName = "ThumbtackDuotone";
var Thumbtack_default = ThumbtackDuotone;
