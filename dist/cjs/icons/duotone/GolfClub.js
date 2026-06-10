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
var GolfClub_exports = {};
__export(GolfClub_exports, {
  default: () => GolfClub_default
});
module.exports = __toCommonJS(GolfClub_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GolfClubDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.15 42.903L282.871 494.335C277.445 505.163 266.373 511.999 254.264 511.999H32C14.326 511.999 0 497.671 0 479.999V471.999H52C58.627 471.999 64 466.624 64 459.999S58.627 447.999 52 447.999H0V415.999H52C58.627 415.999 64 410.624 64 403.999S58.627 391.999 52 391.999H0V363.007C0 341.57 20.662 326.199 41.193 332.359L258.947 397.683L452.734 12.673C458.996 0.986 473.549 -3.413 485.232 2.853L499.338 10.419C511.016 16.681 515.408 31.224 509.15 42.903Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 447.999H52C58.627 447.999 64 453.374 64 459.999S58.627 471.999 52 471.999H0M0 391.999H52C58.627 391.999 64 397.374 64 403.999S58.627 415.999 52 415.999H0" })
    ]
  }
));
GolfClubDuotone.displayName = "GolfClubDuotone";
var GolfClub_default = GolfClubDuotone;
