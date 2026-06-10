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
var LaptopSlash_exports = {};
__export(LaptopSlash_exports, {
  default: () => LaptopSlash_default
});
module.exports = __toCommonJS(LaptopSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LaptopSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512.001 63.996C529.642 63.996 544.001 78.34 544.001 95.996V330.889L567.804 349.682C572.616 346.924 576.001 341.945 576.001 335.996V95.996C576.001 60.715 547.298 31.996 512.001 31.996H165.4L205.933 63.996H512.001ZM64.001 447.996C46.357 447.996 32.001 433.641 32.001 415.996H393.525L352.995 383.996H16.001C7.251 383.996 0.001 391.246 0.001 399.996V415.996C0.001 451.246 28.751 479.996 64.001 479.996H474.587L434.056 447.996H64.001ZM96.001 335.996V181.094L64.001 155.83V335.996C64.001 344.84 71.157 351.996 80.001 351.996S96.001 344.84 96.001 335.996ZM633.923 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.079 508.562C617.017 510.875 620.517 512 623.985 512C628.72 512 633.407 509.906 636.564 505.922C642.032 498.984 640.845 488.92 633.923 483.436Z" })
  }
));
LaptopSlashLight.displayName = "LaptopSlashLight";
var LaptopSlash_default = LaptopSlashLight;
