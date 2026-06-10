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
var StarAndCrescent_exports = {};
__export(StarAndCrescent_exports, {
  default: () => StarAndCrescent_default
});
module.exports = __toCommonJS(StarAndCrescent_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarAndCrescentLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M503.502 213.875L427.125 202.75L392.875 133.5C391.125 129.875 387.5 128 384 128S376.875 129.875 375 133.5L340.875 202.75L264.498 213.875C256.373 215 253.123 225.125 258.998 230.875L314.248 284.75L301.248 360.75C300.123 367.25 305.248 372.5 310.998 372.5C312.498 372.5 314.123 372.125 315.623 371.25L384 335.375L452.252 371.25C453.877 372.125 455.377 372.5 457.002 372.5C462.752 372.5 467.877 367.25 466.752 360.75L453.752 284.75L509.002 230.875C514.877 225.125 511.627 215 503.502 213.875ZM431.375 261.75L419.375 273.5L422.125 290.125L427.625 322.125L398.875 307L384 299.25L369.125 307L340.375 322.125L345.875 290.125L348.625 273.5L336.625 261.75L313.373 239.125L345.5 234.375L362.125 232L369.625 216.875L384 187.75L398.375 216.875L405.875 232L422.5 234.375L454.627 239.125L431.375 261.75ZM337.703 437.219L328.969 437.687C228 437.688 145.844 356.188 145.844 256S228 74.312 328.969 74.312L337.703 74.781C351.875 74.781 364.312 64.719 367.359 50.531C370.109 36.031 362.125 21.75 348.281 16.5C319.094 5.562 288.672 0 257.875 0C115.688 0 0 114.844 0 256S115.688 512 257.875 512C288.313 512 318.578 506.5 347.438 495.812C359.734 491.656 368 480.188 368 467.281C368 450.719 354.406 437.219 337.703 437.219ZM257.875 480C133.328 480 32 379.5 32 256S133.328 32 257.875 32C280.672 32 303.234 35.469 325.125 42.344C208.266 44.375 113.844 139.438 113.844 256C113.844 372.531 208.219 467.562 325.031 469.656C303 476.531 280.469 480 257.875 480Z" })
  }
));
StarAndCrescentLight.displayName = "StarAndCrescentLight";
var StarAndCrescent_default = StarAndCrescentLight;
