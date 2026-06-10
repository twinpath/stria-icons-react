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
var Inhaler_exports = {};
__export(Inhaler_exports, {
  default: () => Inhaler_default
});
module.exports = __toCommonJS(Inhaler_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InhalerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 320.001C14.375 320.001 0 334.376 0 352.001S14.375 384.001 32 384.001S64 369.626 64 352.001S49.625 320.001 32 320.001ZM32 224.002C14.375 224.002 0 238.377 0 256.002S14.375 288.001 32 288.001S64 273.626 64 256.002S49.625 224.002 32 224.002ZM32 416C14.375 416 0 430.375 0 448S14.375 480 32 480S64 465.625 64 448S49.625 416 32 416ZM555.223 65.245L434.693 32.98C419.709 28.933 404.396 37.792 400.35 52.776L378.076 133.862L525.475 281.259L575.02 99.589C579.066 84.604 570.207 69.292 555.223 65.245ZM128 368.001C110.375 368.001 96 382.376 96 400.001S110.375 432 128 432S160 417.625 160 400.001S145.625 368.001 128 368.001ZM128 272.001C110.375 272.001 96 286.376 96 304.001S110.375 336.001 128 336.001S160 321.626 160 304.001S145.625 272.001 128 272.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M327.578 224.002H224C206.326 224.002 192 238.33 192 256.002V447.992C192 465.594 206.4 479.992 224 479.992H470.35C483.146 479.992 494.303 471.461 497.475 459.102L540.262 296.048L356.785 112.573L327.578 224.002Z" })
    ]
  }
));
InhalerDuotone.displayName = "InhalerDuotone";
var Inhaler_default = InhalerDuotone;
