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
var WaveTriangle_exports = {};
__export(WaveTriangle_exports, {
  default: () => WaveTriangle_default
});
module.exports = __toCommonJS(WaveTriangle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WaveTriangleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M617.63 242.42C608.263 235.262 598.572 241.128 595.23 245.664L476.791 408.435C470.857 416.601 457.151 416.614 451.232 408.423L214.396 83.037C205.74 71.119 191.382 64 175.995 64C160.619 64 146.265 71.103 137.597 83.003L19.183 245.703C13.906 252.999 15.341 263.351 22.369 268.799C31.817 276.039 41.489 270.088 44.811 265.496L163.207 102.784C169.142 94.619 182.847 94.604 188.767 102.797L425.604 428.182C434.749 440.774 448.747 448 464.004 448C479.248 448 493.243 440.79 502.403 428.216L620.815 265.516C626.095 258.22 624.659 247.866 617.63 242.42Z" })
  }
));
WaveTriangleLight.displayName = "WaveTriangleLight";
var WaveTriangle_default = WaveTriangleLight;
