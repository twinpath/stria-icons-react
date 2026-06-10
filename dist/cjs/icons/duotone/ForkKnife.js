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
var ForkKnife_exports = {};
__export(ForkKnife_exports, {
  default: () => ForkKnife_default
});
module.exports = __toCommonJS(ForkKnife_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ForkKnifeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M569.606 93.836C563.24 88.977 554.27 89.594 548.614 95.25L446.789 197.076L434.393 184.68L527.045 71.43C532.26 65.07 531.797 55.809 525.985 50C520.174 44.188 510.914 43.723 504.551 48.938L391.303 141.59L378.907 129.195L480.731 27.371C486.387 21.711 487.006 12.742 482.145 6.379C477.393 -0.273 468.489 -1.797 461.528 2.156L363.283 57.844C334.78 76.312 316.371 106.258 312.793 140.066C310.756 159.398 314.24 178.297 321.649 195.619L287.403 228.615L348.627 287.279L380.364 254.334C397.686 261.74 416.586 265.225 435.918 263.189C469.727 259.607 499.668 241.201 518.604 211.881L573.824 114.453C577.782 107.492 576.323 98.656 569.606 93.836ZM71.492 436.623C66.809 441.084 64.09 447.248 64.002 453.748C63.914 460.201 66.455 466.451 71.03 471.029L104.971 504.967C109.545 509.545 115.797 512.084 122.25 511.998C128.746 511.904 134.912 509.189 139.375 504.506L261.545 377.678L197.658 315.076L71.492 436.623Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M56.135 7.028C46.811 -2.296 31.608 -2.386 22.194 7.028C-17.867 47.086 -27.5 290.616 204.649 277.12L436.207 504.037C440.604 508.92 446.814 511.814 453.398 511.99C460.006 512.146 466.369 509.627 471.031 504.967L504.973 471.022C514.342 461.654 514.342 446.451 504.973 437.084" })
    ]
  }
));
ForkKnifeDuotone.displayName = "ForkKnifeDuotone";
var ForkKnife_default = ForkKnifeDuotone;
