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
var Volume_exports = {};
__export(Volume_exports, {
  default: () => Volume_default
});
module.exports = __toCommonJS(Volume_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VolumeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M333.109 34.816C328.908 32.922 324.445 32 320.014 32C312.316 32 304.715 34.783 298.734 40.1L163.84 160.004H80C53.49 160.004 32 181.496 32 208.002V304.002C32 330.51 53.49 352 80 352H163.84L298.734 471.906C304.719 477.219 312.312 480 320 480C324.438 480 328.906 479.094 333.109 477.188C344.609 472.031 352 460.594 352 448V64.006C352 51.41 344.609 39.973 333.109 34.816ZM319.98 447.951L185.086 328.043L175.996 319.963H80C71.178 319.963 64 312.803 64 304.002V208.002C64 199.201 71.178 192.041 80 192.041H175.996L185.086 183.961L319.98 64.057C319.988 64.049 319.996 64.045 320 64.041L319.98 447.951ZM491.375 98.703C484.031 93.781 474.094 95.75 469.172 103.094S466.219 120.375 473.562 125.297C517.672 154.828 544 203.703 544 256S517.672 357.172 473.562 386.703C466.219 391.625 464.25 401.563 469.172 408.906C472.266 413.516 477.328 416 482.484 416C485.547 416 488.641 415.125 491.375 413.297C544.359 377.797 576 319 576 256S544.359 134.203 491.375 98.703ZM438.438 178.703C431.109 173.781 421.156 175.75 416.234 183.094S413.281 200.375 420.625 205.297C437.766 216.766 448 235.734 448 256S437.766 295.234 420.625 306.703C413.281 311.625 411.312 321.563 416.234 328.906C419.328 333.516 424.391 336 429.547 336C432.609 336 435.703 335.125 438.437 333.297C464.469 315.859 480 286.969 480 256S464.469 196.141 438.438 178.703Z" })
  }
));
VolumeLight.displayName = "VolumeLight";
var Volume_default = VolumeLight;
