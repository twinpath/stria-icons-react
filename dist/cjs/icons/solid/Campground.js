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
var Campground_exports = {};
__export(Campground_exports, {
  default: () => Campground_default
});
module.exports = __toCommonJS(Campground_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CampgroundSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M327.5 117.746L381 44.246C386.125 36.996 384.5 26.996 377.375 21.871L351.5 2.996C344.377 -2.2 334.389 -0.627 329.208 6.507L288 63.246L246.792 6.507C241.611 -0.627 231.623 -2.2 224.5 2.996L198.625 21.871C191.5 26.996 189.875 36.996 195 44.246L248.5 117.746L6.43 439.454C2.257 445.001 0 451.754 0 458.695V479.996C0 497.669 14.327 511.996 32 511.996H544C561.673 511.996 576 497.669 576 479.996V458.695C576 451.754 573.743 445.001 569.57 439.454L327.5 117.746ZM288 287.996L404.375 447.996H171.625L288 287.996Z" })
  }
));
CampgroundSolid.displayName = "CampgroundSolid";
var Campground_default = CampgroundSolid;
