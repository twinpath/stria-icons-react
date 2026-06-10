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
var TrashSlash_exports = {};
__export(TrashSlash_exports, {
  default: () => TrashSlash_default
});
module.exports = __toCommonJS(TrashSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M527.999 96C536.8 96 543.999 88.799 543.999 80C543.999 71.199 536.8 64 527.999 64H431.999L398.374 19.25C389.374 7.125 375.124 0 359.999 0H279.999C264.874 0 250.624 7.125 241.624 19.25L207.999 64H180.114L220.648 96H527.999ZM267.249 38.375C270.249 34.375 274.999 32 279.999 32H359.999C364.999 32 369.749 34.375 372.749 38.375L391.999 64H247.999L267.249 38.375ZM480.839 142.576L467.583 290.955L497.595 314.648L512.71 145.422C513.548 136.061 506.173 128 496.775 128C488.489 128 481.575 134.324 480.839 142.576ZM451.999 465.375C451.374 473.625 444.374 480 436.124 480H203.874C195.624 480 188.624 473.625 187.999 465.375L165.696 215.721L131.13 188.43L156.124 468.25C158.374 493 178.999 512 203.874 512H436.124C460.999 512 481.624 493 483.874 468.25L483.985 467.01L453.97 443.312L451.999 465.375ZM633.921 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.077 508.562C617.015 510.875 620.515 512 623.984 512C628.718 512 633.405 509.906 636.562 505.922C642.03 498.984 640.843 488.92 633.921 483.436Z" })
  }
));
TrashSlashLight.displayName = "TrashSlashLight";
var TrashSlash_default = TrashSlashLight;
