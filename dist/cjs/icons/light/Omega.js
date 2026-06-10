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
var Omega_exports = {};
__export(Omega_exports, {
  default: () => Omega_default
});
module.exports = __toCommonJS(Omega_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OmegaLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 463.998C448 472.799 440.801 480 432 480H304C295.199 480 288 472.799 288 463.998V447.746C288 441.141 292.121 435.4 298.207 432.834C367.289 403.686 416 335.451 416 255.973C416 147.461 325.5 59.701 216 64.076C118.625 68.076 37.75 147.711 32.25 245.098C27.627 329.193 77.58 402.424 149.779 432.826C155.873 435.393 160 441.133 160 447.746V463.998C160 472.799 152.801 480 144 480H16C7.199 480 0 472.799 0 463.998S7.199 447.996 16 447.996H109C36.375 404.365 -9.625 321.105 1.75 227.846C14.125 126.459 96.625 44.699 198.25 33.447C333.5 18.32 448 123.709 448 255.973C448 337.607 404.25 408.867 339 447.996H432C440.801 447.996 448 455.197 448 463.998Z" })
  }
));
OmegaLight.displayName = "OmegaLight";
var Omega_default = OmegaLight;
