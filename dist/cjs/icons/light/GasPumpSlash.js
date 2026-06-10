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
var GasPumpSlash_exports = {};
__export(GasPumpSlash_exports, {
  default: () => GasPumpSlash_default
});
module.exports = __toCommonJS(GasPumpSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GasPumpSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 480H384V388.059L352 362.795V480H128V185.947L96 160.684V480H80C71.201 480 64 487.199 64 496S71.201 512 80 512H400C408.801 512 416 504.801 416 496S408.801 480 400 480ZM480 78.625V160C480 186.51 501.49 208 528 208H544V351.299L576 376.562V142.625C576 134.148 572.637 126.02 566.646 120.021L476.32 29.586C470.07 23.326 459.928 23.322 453.672 29.578C447.43 35.82 447.418 45.939 453.648 52.195L480 78.625ZM512 110.625L544 142.625V176H528C519.25 176 512 168.75 512 160V110.625ZM160 32H320C337.625 32 352 46.375 352 64V199.715L384 224.979V64C384 28.801 355.201 0 320 0H160C144.226 0 129.922 6.001 118.734 15.553L144.975 36.27C149.519 33.785 154.473 32 160 32ZM633.908 483.438L25.904 3.42C18.998 -2.033 8.935 -0.83 3.435 6.061C-2.033 12.998 -0.846 23.062 6.092 28.547L614.096 508.563C617.033 510.875 620.533 512 624.002 512C628.721 512 633.408 509.906 636.564 505.922C642.033 498.984 640.846 488.922 633.908 483.438Z" })
  }
));
GasPumpSlashLight.displayName = "GasPumpSlashLight";
var GasPumpSlash_default = GasPumpSlashLight;
