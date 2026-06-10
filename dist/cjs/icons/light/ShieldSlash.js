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
var ShieldSlash_exports = {};
__export(ShieldSlash_exports, {
  default: () => ShieldSlash_default
});
module.exports = __toCommonJS(ShieldSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShieldSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.062 479.969C304.801 479.969 139.582 403.055 114.851 175.586L80.741 148.664C90.772 393.564 271.741 512 319.937 512C358.765 512 426.736 450.5 442.505 434.258L417.441 414.469C378.757 454.837 331.938 479.969 320.062 479.969ZM313.749 33.25C315.722 32.422 317.858 31.984 320.007 31.984C322.078 31.984 324.161 32.391 326.124 33.25L518.124 113.25C527.265 117.059 527.874 125.838 527.874 128.312C527.874 194.964 512.897 255.816 489.036 307.867L515.782 328.984C542.275 274.266 559.999 207.562 559.999 128C559.999 108.625 548.249 91.125 530.499 83.75L338.499 3.75C332.624 1.25 326.343 0 320.062 0S307.499 1.25 301.624 3.75L172.153 57.695L200.8 80.312L313.749 33.25ZM639.998 496.019C639.998 491.287 637.914 486.601 633.921 483.438L25.921 3.422C22.989 1.117 19.499 0.002 16.032 0.002C7.384 0.002 0 6.898 0 15.966C0 20.697 2.085 25.383 6.077 28.547L614.077 508.563C617.015 510.875 620.515 512 623.984 512C632.535 512 639.998 505.146 639.998 496.019Z " })
  }
));
ShieldSlashLight.displayName = "ShieldSlashLight";
var ShieldSlash_default = ShieldSlashLight;
