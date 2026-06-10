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
var PlaneDeparture_exports = {};
__export(PlaneDeparture_exports, {
  default: () => PlaneDeparture_default
});
module.exports = __toCommonJS(PlaneDeparture_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneDepartureDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 448H32C14.327 448 0 462.327 0 480V480C0 497.673 14.327 512 32 512H608C625.673 512 640 497.673 640 480V480C640 462.327 625.673 448 608 448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M622.966 138.771C606.716 164.145 582.718 183.518 555.968 197.016L264.972 344.625C255.847 349.375 245.722 351.75 235.347 351.75L104.849 352C95.599 352 86.849 348.125 80.474 341.252L4.35 258.26C-3.275 249.385 -0.525 235.512 9.85 230.262L49.974 209.889C55.099 207.266 60.974 207.266 66.099 209.889L138.474 246.26L241.597 193.891L85.474 95.9C77.349 87.027 79.974 72.779 90.599 67.279L156.349 33.908C162.099 31.033 168.974 31.408 174.347 35.031L393.095 117.148L491.593 67.154C518.343 53.529 547.968 45.656 577.843 47.656C611.341 49.781 628.841 60.529 636.091 75.152C643.341 89.652 641.341 110.275 622.966 138.771Z" })
    ]
  }
));
PlaneDepartureDuotone.displayName = "PlaneDepartureDuotone";
var PlaneDeparture_default = PlaneDepartureDuotone;
