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
var Ufo_exports = {};
__export(Ufo_exports, {
  default: () => Ufo_default
});
module.exports = __toCommonJS(Ufo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UfoDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 240C496 243.146 495.695 246.215 495.531 249.322C441.945 273.66 382.797 288 320 288S198.055 273.66 144.469 249.322C144.305 246.215 144 243.146 144 240C144 142.798 222.798 64 320 64S496 142.798 496 240Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.652 212.582C495.147 221.646 495.932 230.814 496 240C496 243.146 495.695 246.215 495.531 249.322C441.945 273.66 382.797 288 320 288S198.055 273.66 144.469 249.322C144.305 246.215 144 243.146 144 240C144.068 230.814 144.853 221.646 146.348 212.582C58.355 235.391 0 274.936 0 320C0 390.691 143.27 448 320 448S640 390.691 640 320C640 274.936 581.645 235.391 493.652 212.582ZM128 360C114.745 360 104 349.255 104 336S114.745 312 128 312S152 322.745 152 336C151.999 349.255 141.255 359.999 128 360ZM320 392C306.745 392 296 381.255 296 368S306.745 344 320 344S344 354.745 344 368C343.999 381.255 333.255 391.999 320 392ZM512 360C498.745 360 488 349.255 488 336S498.745 312 512 312S536 322.745 536 336C535.999 349.255 525.255 359.999 512 360Z" })
    ]
  }
));
UfoDuotone.displayName = "UfoDuotone";
var Ufo_default = UfoDuotone;
