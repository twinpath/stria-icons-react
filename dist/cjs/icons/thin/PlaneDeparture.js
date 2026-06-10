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
const PlaneDepartureThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80.475 341.252C86.85 348.125 95.6 352 104.85 352L235.348 351.75C245.723 351.75 255.848 349.375 264.973 344.625L555.969 197.016C582.719 183.518 606.717 164.145 622.967 138.771C641.342 110.275 643.342 89.652 636.092 75.152C628.842 60.529 611.342 49.781 577.844 47.656C574.752 47.449 571.662 47.348 568.576 47.348C541.865 47.348 515.574 54.939 491.594 67.154L393.096 117.148L174.348 35.031C171.352 33.012 167.889 32 164.414 32C161.656 32 158.893 32.637 156.35 33.908L90.6 67.279C79.975 72.779 77.35 87.027 85.475 95.9L241.598 193.891L138.475 246.26L66.1 209.889C63.537 208.578 60.787 207.922 58.037 207.922S52.537 208.578 49.975 209.889L9.852 230.262C-0.523 235.512 -3.273 249.385 4.352 258.26L80.475 341.252ZM17.096 244.527L57.219 224.154L58.893 224.197L58.916 224.186L131.291 260.557L138.512 264.186L145.719 260.525L248.842 208.156L274.039 195.361L250.104 180.34L96.75 84.088C96.693 83.805 96.693 83.502 96.75 83.18C96.844 82.643 97.131 81.914 97.842 81.547L163.506 48.219C163.795 48.074 164.102 48 164.414 48L165.404 48.297L166.963 49.35L168.725 50.01L387.473 132.127L394.062 134.602L400.338 131.416L498.855 81.412C522.389 69.426 545.846 63.348 568.576 63.348C571.305 63.348 574.039 63.437 576.83 63.625C593.641 64.689 615.078 68.789 621.781 82.309C628.48 95.705 618.811 115.693 609.494 130.143C595.91 151.352 574.908 169.537 548.73 182.746L257.586 330.434C250.807 333.961 243.326 335.75 235.316 335.75L104.85 336C100.062 336 95.572 334.002 92.266 330.438L16.488 247.832C15.949 247.205 15.953 246.484 16.051 245.99C16.145 245.516 16.398 244.881 17.096 244.527ZM632 496H8C3.578 496 0 499.578 0 504S3.578 512 8 512H632C636.422 512 640 508.422 640 504S636.422 496 632 496Z" })
  }
));
PlaneDepartureThin.displayName = "PlaneDepartureThin";
var PlaneDeparture_default = PlaneDepartureThin;
