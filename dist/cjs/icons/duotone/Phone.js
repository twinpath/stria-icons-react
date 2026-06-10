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
var Phone_exports = {};
__export(Phone_exports, {
  default: () => Phone_default
});
module.exports = __toCommonJS(Phone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.451 447.118L507.237 404.706L331.246 334.31L304.096 367.454L497.451 447.118ZM144.618 207.904L177.769 180.767L107.414 4.884L65 14.668L144.618 207.904Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M507.114 404.706L511.193 387.032C514.598 372.344 506.975 357.266 493.066 351.172L384.505 304.639C371.722 299.203 356.848 302.878 348.066 313.627L331.123 334.31L507.114 404.706ZM0 54.517C-0.001 306.766 205.221 512 457.505 512C472.16 512 484.692 502.032 487.943 487.782L497.328 447.118L303.973 367.454C234.751 333.469 178.47 277.172 144.47 207.924L144.495 207.904L64.877 14.668L24.218 24.047C9.967 27.314 -0.001 39.846 0 54.517ZM198.283 163.875C209.064 155.188 212.783 140.171 207.253 127.391L160.75 18.907C154.751 4.999 139.595 -2.576 125.002 0.797L107.291 4.884L177.646 180.767L198.283 163.875Z" })
    ]
  }
));
PhoneDuotone.displayName = "PhoneDuotone";
var Phone_default = PhoneDuotone;
