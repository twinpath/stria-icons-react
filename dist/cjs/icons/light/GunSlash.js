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
var GunSlash_exports = {};
__export(GunSlash_exports, {
  default: () => GunSlash_default
});
module.exports = __toCommonJS(GunSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GunSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M215.864 448L96.247 447.168L136.712 289.582C141.569 272.574 138.89 255 130.118 240H196.448L155.917 208H75.173C69.003 208 64.001 203 64.001 196.828V135.43L32.001 110.168V196.828C32.001 220.672 51.329 240 75.173 240H75.175C96.435 240 111.784 260.348 105.942 280.793L65.253 439.207C59.411 459.652 74.761 480 96.021 480H215.864C230.151 480 242.706 470.531 246.632 456.793L285.415 310.238L258.036 288.625L215.864 448ZM576.001 96V176H498.745L466.747 208H362.509L420.325 253.645L424.874 240H466.747C475.234 240 483.372 236.629 489.374 230.629L512.001 208H576.001C593.675 208 608.001 193.672 608.001 176V96C608.001 78.328 593.675 64 576.001 64H544.001V48C544.001 39.164 536.837 32 528.001 32S512.001 39.164 512.001 48V64H180.116L220.65 96H576.001ZM633.925 483.438L25.921 3.422C18.984 -2.031 8.921 -0.828 3.437 6.062C-2.032 13 -0.845 23.062 6.077 28.547L614.081 508.562C617.019 510.875 620.519 512 623.987 512C628.722 512 633.409 509.906 636.566 505.922C642.034 498.984 640.847 488.922 633.925 483.438Z" })
  }
));
GunSlashLight.displayName = "GunSlashLight";
var GunSlash_default = GunSlashLight;
