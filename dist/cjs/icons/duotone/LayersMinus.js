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
var LayersMinus_exports = {};
__export(LayersMinus_exports, {
  default: () => LayersMinus_default
});
module.exports = __toCommonJS(LayersMinus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LayersMinusDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M499.625 236.25L266.625 130.75C259.875 127.625 252.125 127.625 245.375 130.75L12.375 236.25C-4.125 243.75 -4.125 268.75 12.375 276.25L245.375 381.875C252.125 385 259.875 385 266.625 381.875L499.625 276.25C516.125 268.75 516.125 243.75 499.625 236.25Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 56H376C362.745 56 352 66.745 352 80V80C352 93.255 362.745 104 376 104H488C501.255 104 512 93.255 512 80V80C512 66.745 501.255 56 488 56ZM499.625 364.125L441.5 337.75L279.875 411C272.25 414.5 264.25 416.25 256 416.25S239.75 414.5 232.125 411L70.5 337.75L12.375 364.125C-4.125 371.625 -4.125 396.625 12.375 404.125L245.375 509.75C252.125 512.75 259.875 512.75 266.625 509.75L499.625 404.125C516.125 396.625 516.125 371.625 499.625 364.125Z" })
    ]
  }
));
LayersMinusDuotone.displayName = "LayersMinusDuotone";
var LayersMinus_default = LayersMinusDuotone;
