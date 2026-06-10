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
var Peach_exports = {};
__export(Peach_exports, {
  default: () => Peach_default
});
module.exports = __toCommonJS(Peach_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PeachDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 272C512 426.596 270.35 507.496 256 512C256 512 0 437.064 0 272C0 183.637 77.602 112.004 173.33 112C255.434 112 330.672 172.383 330.672 256C330.672 264.844 337.828 272 346.672 272S362.672 264.844 362.672 256C362.672 200.279 334.59 150.619 290.979 118.348C306.156 114.34 322.094 112 338.668 112C434.396 112 512 183.635 512 272Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M146.637 81.814C167.703 79.24 207.115 76.986 251.396 95.703C282.857 87.395 314.648 75.615 365.365 81.813C386.262 67.379 400 43.316 400 16V0H336C291.816 0 256 35.816 256 80C256 35.816 204.184 0 160 0H112V16C112 43.318 125.74 67.381 146.637 81.814Z" })
    ]
  }
));
PeachDuotone.displayName = "PeachDuotone";
var Peach_default = PeachDuotone;
