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
var BatterySlash_exports = {};
__export(BatterySlash_exports, {
  default: () => BatterySlash_default
});
module.exports = __toCommonJS(BatterySlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BatterySlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M592 320C600.844 320 608 312.844 608 304V208C608 199.156 600.844 192 592 192S576 199.156 576 208V304C576 312.844 583.156 320 592 320ZM480 128C497.644 128 512 142.355 512 160V326.033L544 351.297V160C544 124.654 515.346 96 480 96H220.635L261.166 128H480ZM96 384C78.355 384 64 369.645 64 352V160C64 152.717 66.873 146.316 70.986 140.934L45.644 120.926C37.221 131.764 32 145.211 32 160V352C32 387.346 60.654 416 96 416H419.392L378.861 384H96ZM633.908 483.436L25.904 3.418C18.998 -2.02 8.935 -0.848 3.435 6.059C-2.033 12.998 -0.846 23.061 6.092 28.545L614.096 508.563C617.033 510.875 620.533 512 624.002 512C628.721 512 633.408 509.906 636.564 505.922C642.033 498.984 640.846 488.922 633.908 483.436Z" })
  }
));
BatterySlashLight.displayName = "BatterySlashLight";
var BatterySlash_default = BatterySlashLight;
