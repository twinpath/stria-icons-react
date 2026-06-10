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
var PenPaintbrush_exports = {};
__export(PenPaintbrush_exports, {
  default: () => PenPaintbrush_default
});
module.exports = __toCommonJS(PenPaintbrush_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenPaintbrushLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M162.115 208.619L41.587 88.092C28.775 75.279 28.775 54.402 41.587 41.588C54.402 28.775 75.279 28.775 88.091 41.588L208.617 162.115L231.244 139.486L110.718 18.961C85.435 -6.32 44.277 -6.32 18.962 18.961C-6.321 44.26 -6.321 85.42 18.962 110.719L139.488 231.246L162.115 208.619ZM543.998 447.994C511.996 447.994 492.771 426.816 495.021 400.988C497.593 371.496 487.685 341.107 465.308 318.594C453.529 306.729 439.22 298.523 423.765 293.502L396.785 320.48C414.109 321.695 430.265 328.719 442.597 341.141C457.513 356.146 464.996 376.941 463.14 398.207C461.298 419.354 467.941 439.35 481.845 454.518C496.904 470.947 518.978 479.996 543.998 479.996H490.279C418.992 479.996 364.537 466.338 340.876 442.521C328.634 430.184 321.945 413.654 320.998 396.262L293.787 423.469C298.326 438.668 306.201 453.012 318.173 465.076C357.269 504.43 435.744 512 490.279 512C515.871 512 543.998 512 543.998 512C561.673 512 576 497.67 576 479.996S561.673 447.994 543.998 447.994ZM525.257 56.262L487.746 18.746C475.25 6.248 458.867 -0.002 442.49 -0.002C426.107 -0.002 409.728 6.246 397.23 18.748L66.458 349.533C63.478 355.104 60.689 360.314 57.707 365.885L32.318 492.855C30.296 502.969 38.156 512 47.947 512C48.994 512 50.062 511.896 51.144 511.682L178.109 486.285C183.677 483.305 188.89 480.516 194.459 477.535L525.251 146.771C550.248 121.779 550.25 81.256 525.257 56.262ZM175.183 451.557L169.281 454.715L167.187 455.836L68.404 475.594L88.158 376.807L92.171 369.305L92.437 368.809L347.306 113.932L430.068 196.693L175.183 451.557ZM502.626 124.143L452.695 174.07L369.929 91.305L419.859 41.375C425.904 35.328 433.941 32 442.49 32C451.037 32 459.074 35.328 465.119 41.373L502.628 78.887C508.671 84.932 512 92.967 512 101.516C512 110.062 508.669 118.098 502.626 124.143Z" })
  }
));
PenPaintbrushLight.displayName = "PenPaintbrushLight";
var PenPaintbrush_default = PenPaintbrushLight;
