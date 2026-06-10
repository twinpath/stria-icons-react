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
var Headphones_exports = {};
__export(Headphones_exports, {
  default: () => Headphones_default
});
module.exports = __toCommonJS(Headphones_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadphonesDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.975 400.125C511.975 400.039 512 399.961 512 399.875V400C512 400.045 511.975 400.08 511.975 400.125ZM0 399.875V400C0 400.045 0.025 400.08 0.025 400.125C0.025 400.039 0 399.961 0 399.875ZM256 32C112.906 32 4.562 151.125 0 288V336.125C0 302.654 20.637 273.99 49.803 262.021C62.66 159.615 150.16 80.201 256 80.188C361.84 80.201 449.34 159.615 462.197 262.021C491.363 273.99 512 302.654 512 336.125V288C507.438 151.125 399.094 32 256 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 256C35.889 256 0 291.945 0 336.125V399.875C0 444.055 35.889 480 80 480C106.467 480 128 458.438 128 431.938V304.062C128 277.562 106.467 256 80 256ZM432 256C405.533 256 384 277.562 384 304.062V431.938C384 458.438 405.533 480 432 480C476.111 480 512 444.055 512 399.875V336.125C512 291.945 476.111 256 432 256Z" })
    ]
  }
));
HeadphonesDuotone.displayName = "HeadphonesDuotone";
var Headphones_default = HeadphonesDuotone;
