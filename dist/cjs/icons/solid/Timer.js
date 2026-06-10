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
var Timer_exports = {};
__export(Timer_exports, {
  default: () => Timer_default
});
module.exports = __toCommonJS(Timer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TimerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M389.755 56.492C348.197 28.139 297.654 16.015 247.343 16.001C234.494 15.997 223.984 26.409 223.984 39.258L223.984 110.312C223.984 126.258 234.883 141.035 250.622 143.593C270.683 146.855 288.017 131.466 288.017 112.024V83.141C336.151 91.95 379.072 120.102 406.765 164.745C442.322 222.064 441.139 295.466 403.973 351.756C340.338 448.135 208.704 457.781 131.482 380.563C69.425 318.509 63.469 221.253 113.616 152.44C122.892 139.711 122.278 122.357 111.139 111.222L111.138 111.222C96.124 96.214 73.859 98.174 61.409 115.369C-6.506 209.172 1.761 341.372 86.209 425.824C133.013 472.617 194.515 496.032 256 496C317.486 496 378.986 472.617 425.792 425.824C530.175 321.434 518.163 144.09 389.755 56.492ZM239.031 272.969C243.718 277.657 249.859 280 256 280C262.14 280 268.281 277.657 272.968 272.969C282.343 263.594 282.343 248.407 272.968 239.032L192.968 159.032C183.593 149.657 168.406 149.657 159.031 159.032S149.656 183.594 159.031 192.969L239.031 272.969Z" })
  }
));
TimerSolid.displayName = "TimerSolid";
var Timer_default = TimerSolid;
