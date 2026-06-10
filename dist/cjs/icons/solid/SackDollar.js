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
var SackDollar_exports = {};
__export(SackDollar_exports, {
  default: () => SackDollar_default
});
module.exports = __toCommonJS(SackDollar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SackDollarSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192.001 96H320.023L367.407 24.875C370.657 20 371.032 13.625 368.282 8.5C365.405 3.25 360.03 0 354.153 0H157.995C151.993 0 146.618 3.25 143.868 8.5C140.991 13.625 141.366 20 144.618 24.875L192.001 96ZM320.023 128H192.001C-10.409 243.375 0.093 396.625 0.093 416C0.093 469 49.226 512 109.737 512H402.288C462.923 512 511.931 469 511.931 416C511.931 397 521.308 242.75 320.023 128ZM327.064 367.828C322.925 391.707 305.29 407.84 280.064 413.568V424C280.064 437.25 269.314 448 256.064 448S232.064 437.25 232.064 424V412.598C222.536 410.379 213.116 407.344 204.626 404.281L199.97 402.625C187.501 398.188 180.939 384.469 185.376 371.984S203.501 352.984 216.032 357.375L220.876 359.125C229.689 362.297 239.657 365.891 247.376 367.047C264.345 369.766 278.564 366.438 279.751 359.656C280.564 354.953 281.064 352.109 249.376 343.047L242.876 341.172C224.689 335.812 176.437 321.625 184.97 272.156C189.12 248.254 206.776 232.229 232.064 226.52V216C232.064 202.75 242.814 192 256.064 192S280.064 202.75 280.064 216V227.252C285.98 228.617 292.298 230.348 299.876 232.984C312.407 237.328 319.032 251 314.689 263.531C310.314 276.047 296.564 282.719 284.126 278.328C275.907 275.469 269.501 273.703 264.532 272.922C247.626 270.344 233.47 273.547 232.282 280.344C231.564 284.406 231.001 287.641 256.407 295.109L262.595 296.906C288.126 304.203 335.689 317.812 327.064 367.828Z" })
  }
));
SackDollarSolid.displayName = "SackDollarSolid";
var SackDollar_default = SackDollarSolid;
