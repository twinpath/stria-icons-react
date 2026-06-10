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
var Layers_exports = {};
__export(Layers_exports, {
  default: () => Layers_default
});
module.exports = __toCommonJS(Layers_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LayersDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M487.25 236.25L429.125 210.001L267.5 283.25C259.875 286.625 251.875 288.375 243.625 288.375S227.375 286.625 219.75 283.25L58.125 210.001L0 236.25C-16.5 243.75 -16.5 268.75 0 276.25L233 381.875C239.75 385 247.5 385 254.25 381.875L487.25 276.25C503.75 268.75 503.75 243.75 487.25 236.25Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M499.625 364.125L441.75 337.875L279.875 411.25C272.25 414.625 264.25 416.375 256 416.375S239.75 414.625 232.125 411.25L70.25 337.875L12.375 364.125C-4.125 371.625 -4.125 396.625 12.375 404.125L245.375 509.75C252.125 512.75 259.875 512.75 266.625 509.75L499.625 404.125C516.125 396.625 516.125 371.625 499.625 364.125ZM12.375 148L245.375 253.75C252.125 256.75 259.875 256.75 266.625 253.75L499.625 148C516.125 140.5 516.125 115.5 499.625 108L266.625 2.25C259.875 -0.75 252.125 -0.75 245.375 2.25L12.375 108C-4.125 115.5 -4.125 140.5 12.375 148Z" })
    ]
  }
));
LayersDuotone.displayName = "LayersDuotone";
var Layers_default = LayersDuotone;
