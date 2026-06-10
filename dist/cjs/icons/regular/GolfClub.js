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
const GolfClubRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.947 33.672L312.621 481.031C302.902 500.531 284.34 512 263.701 512H54.172C24.297 512 0 487.719 0 457.844V310.18C0 292.898 7.953 277.055 21.812 266.742S53.109 253.367 69.703 258.273L246.436 307.523C259.217 311.086 266.67 324.336 263.123 337.086C259.545 349.867 246.295 357.273 233.561 353.773L56.391 304.398C53.406 303.523 51.609 304.398 50.484 305.242C49.344 306.086 48 307.617 48 310.18V335.992H80C88.836 335.992 95.998 343.156 95.998 351.992S88.836 367.992 80 367.992H48V399.996H80C88.836 399.996 95.998 407.16 95.998 415.996S88.836 431.996 80 431.996H48V457.844C48 461.25 50.766 464 54.172 464H263.701C266.045 464 268.154 462.688 269.199 460.625L466.041 14.293C471.385 2.199 485.525 -3.27 497.682 2.012C509.807 7.387 515.307 21.543 509.947 33.672Z" })
  }
));
GolfClubRegular.displayName = "GolfClubRegular";
var GolfClub_default = GolfClubRegular;
